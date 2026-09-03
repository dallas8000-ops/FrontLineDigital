/**
 * Barney AI — embeddable chat widget for gilliomfrontlinedigital.com
 *
 * Drop-in, zero-dependency, single <script> tag. Talks directly to the
 * live AI Clone API (Railway) via fetch(). Requires the API's
 * ALLOWED_ORIGINS to include this site's origin — already set on the
 * Railway service as of 2026-09-03 (https://gilliomfrontlinedigital.com
 * and the www. variant). If this widget is ever served from a different
 * origin (a staging subdomain, a preview deploy), that origin must be
 * added to ALLOWED_ORIGINS on Railway or every request here will fail
 * a CORS preflight silently (browser console will show the real error;
 * this widget surfaces it to the user as a generic "trouble connecting"
 * message rather than a raw CORS error, which would mean nothing to a
 * site visitor).
 *
 * Usage: <script src="/path/to/barney-ai-widget.js" defer></script>
 * Optional: <script>window.BARNEY_AI_CONFIG = { apiBase: "..." }</script>
 * placed BEFORE this script tag to override the default API base URL.
 */
(function () {
  "use strict";

  var CONFIG = Object.assign(
    {
      apiBase: "https://ai-clone-api-production.up.railway.app",
      greeting:
        "Hi — I'm Barney's AI clone. Ask me about RigHand AI, DBOps, custom builds, pricing, or anything else on the site.",
      title: "Ask Barney AI",
      accentColor: "#7c5cff",
    },
    window.BARNEY_AI_CONFIG || {}
  );

  var STORAGE_KEY = "barney_ai_conversation";
  var MAX_MESSAGE_CHARS = 2000;

  // ---- state -------------------------------------------------------------

  var state = loadState() || {
    conversationId: makeId(),
    history: [], // [{role: "user"|"assistant", content: "..."}]
  };
  saveState();

  var isOpen = false;
  var isSending = false;

  // ---- persistence (best-effort; widget must work with storage disabled) -

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* private browsing / storage disabled — degrade to in-memory only */
    }
  }

  function makeId() {
    if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
    return "conv-" + Date.now() + "-" + Math.random().toString(16).slice(2);
  }

  // ---- styles --------------------------------------------------------------

  var css =
    "#bai-launcher{position:fixed;bottom:24px;right:24px;width:60px;height:60px;" +
    "border-radius:50%;background:" + CONFIG.accentColor + ";color:#fff;border:none;" +
    "box-shadow:0 6px 20px rgba(0,0,0,.25);cursor:pointer;z-index:2147483000;" +
    "display:flex;align-items:center;justify-content:center;transition:transform .15s ease;}" +
    "#bai-launcher:hover{transform:scale(1.06);}" +
    "#bai-launcher svg{width:28px;height:28px;fill:#fff;}" +
    "#bai-panel{position:fixed;bottom:96px;right:24px;width:360px;max-width:calc(100vw - 32px);" +
    "height:520px;max-height:calc(100vh - 140px);background:#12121a;color:#e9e9f2;" +
    "border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.35);display:none;flex-direction:column;" +
    "overflow:hidden;z-index:2147483000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;" +
    "border:1px solid rgba(255,255,255,.08);}" +
    "#bai-panel.bai-open{display:flex;}" +
    "#bai-header{padding:14px 16px;background:linear-gradient(135deg," + CONFIG.accentColor + ",#5a3fd6);" +
    "display:flex;align-items:center;justify-content:space-between;flex:0 0 auto;}" +
    "#bai-header strong{font-size:14px;}" +
    "#bai-header span{font-size:11px;opacity:.85;display:block;margin-top:2px;}" +
    "#bai-close{background:transparent;border:none;color:#fff;font-size:20px;cursor:pointer;" +
    "line-height:1;padding:4px;opacity:.85;}" +
    "#bai-close:hover{opacity:1;}" +
    "#bai-messages{flex:1 1 auto;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;" +
    "font-size:13.5px;line-height:1.45;}" +
    ".bai-msg{max-width:85%;padding:9px 12px;border-radius:12px;white-space:pre-wrap;word-wrap:break-word;}" +
    ".bai-msg.bai-user{align-self:flex-end;background:" + CONFIG.accentColor + ";color:#fff;" +
    "border-bottom-right-radius:3px;}" +
    ".bai-msg.bai-assistant{align-self:flex-start;background:#1e1e2a;border-bottom-left-radius:3px;}" +
    ".bai-msg.bai-error{align-self:flex-start;background:#3a1e22;color:#ffb4bb;border:1px solid #5a2a30;}" +
    ".bai-typing{align-self:flex-start;font-size:12px;opacity:.6;padding:0 4px;}" +
    "#bai-inputrow{flex:0 0 auto;display:flex;gap:8px;padding:12px;border-top:1px solid rgba(255,255,255,.08);}" +
    "#bai-input{flex:1;resize:none;border-radius:10px;border:1px solid rgba(255,255,255,.15);" +
    "background:#1a1a24;color:#e9e9f2;padding:9px 11px;font-size:13.5px;font-family:inherit;max-height:80px;}" +
    "#bai-input:focus{outline:none;border-color:" + CONFIG.accentColor + ";}" +
    "#bai-send{background:" + CONFIG.accentColor + ";border:none;color:#fff;border-radius:10px;" +
    "padding:0 14px;cursor:pointer;font-size:13px;font-weight:600;}" +
    "#bai-send:disabled{opacity:.5;cursor:default;}" +
    "#bai-lead-banner{font-size:11px;padding:6px 14px;background:#1a2a1e;color:#9be3a8;" +
    "border-top:1px solid rgba(255,255,255,.08);display:none;}";

  var styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ---- DOM -----------------------------------------------------------------

  var launcher = document.createElement("button");
  launcher.id = "bai-launcher";
  launcher.setAttribute("aria-label", CONFIG.title);
  launcher.innerHTML =
    '<svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2z"/></svg>';

  var panel = document.createElement("div");
  panel.id = "bai-panel";
  panel.innerHTML =
    '<div id="bai-header">' +
    "<div><strong>" + escapeHtml(CONFIG.title) + "</strong>" +
    '<span>Usually replies in a few seconds</span></div>' +
    '<button id="bai-close" aria-label="Close chat">&times;</button>' +
    "</div>" +
    '<div id="bai-messages"></div>' +
    '<div id="bai-lead-banner">Thanks — details noted. Barney will follow up directly.</div>' +
    '<div id="bai-inputrow">' +
    '<textarea id="bai-input" rows="1" maxlength="' + MAX_MESSAGE_CHARS + '" placeholder="Type a message..."></textarea>' +
    '<button id="bai-send">Send</button>' +
    "</div>";

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  var messagesEl = panel.querySelector("#bai-messages");
  var inputEl = panel.querySelector("#bai-input");
  var sendBtn = panel.querySelector("#bai-send");
  var closeBtn = panel.querySelector("#bai-close");
  var leadBanner = panel.querySelector("#bai-lead-banner");

  // ---- render ---------------------------------------------------------------

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function renderHistory() {
    messagesEl.innerHTML = "";
    if (state.history.length === 0) {
      appendMessage("assistant", CONFIG.greeting, { persist: false });
    } else {
      state.history.forEach(function (m) {
        appendMessage(m.role, m.content, { persist: false });
      });
    }
  }

  function appendMessage(role, content, opts) {
    opts = opts || {};
    var el = document.createElement("div");
    el.className = "bai-msg bai-" + role;
    el.textContent = content;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    if (opts.persist !== false && (role === "user" || role === "assistant")) {
      state.history.push({ role: role, content: content });
      // Keep the client-side transcript bounded — the API only uses recent
      // turns for context anyway (MAX_HISTORY_TURNS server-side).
      if (state.history.length > 40) state.history = state.history.slice(-40);
      saveState();
    }
    return el;
  }

  function showTyping() {
    var el = document.createElement("div");
    el.className = "bai-typing";
    el.id = "bai-typing-indicator";
    el.textContent = "Barney AI is typing…";
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById("bai-typing-indicator");
    if (el) el.remove();
  }

  // ---- networking -------------------------------------------------------

  function sendMessage(text) {
    if (isSending) return;
    text = text.trim();
    if (!text) return;
    if (text.length > MAX_MESSAGE_CHARS) {
      appendMessage("error", "That message is too long (" + MAX_MESSAGE_CHARS + " character limit).", {
        persist: false,
      });
      return;
    }

    appendMessage("user", text);
    inputEl.value = "";
    autoGrow();
    isSending = true;
    sendBtn.disabled = true;
    showTyping();

    var historyForApi = state.history.slice(0, -1).slice(-20); // exclude the message just added, server re-adds it

    fetch(CONFIG.apiBase + "/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        conversation_id: state.conversationId,
        message: text,
        history: historyForApi,
      }),
    })
      .then(function (resp) {
        if (!resp.ok) {
          return resp.text().then(function (body) {
            throw new Error("HTTP " + resp.status + ": " + body.slice(0, 200));
          });
        }
        return resp.json();
      })
      .then(function (data) {
        hideTyping();
        appendMessage("assistant", data.reply);
        if (data.lead_captured) {
          leadBanner.style.display = "block";
        }
      })
      .catch(function (err) {
        hideTyping();
        // A visitor never needs to see "Failed to fetch" or a CORS message —
        // just that something needs a human. The real error still goes to
        // the browser console for whoever's debugging the embed.
        console.error("[Barney AI widget]", err);
        appendMessage(
          "error",
          "Having trouble connecting right now — please try again in a moment, or reach out directly.",
          { persist: false }
        );
      })
      .then(function () {
        isSending = false;
        sendBtn.disabled = false;
      });
  }

  function autoGrow() {
    inputEl.style.height = "auto";
    inputEl.style.height = Math.min(inputEl.scrollHeight, 80) + "px";
  }

  // ---- events -----------------------------------------------------------

  launcher.addEventListener("click", function () {
    isOpen = !isOpen;
    panel.classList.toggle("bai-open", isOpen);
    if (isOpen) {
      if (messagesEl.children.length === 0) renderHistory();
      inputEl.focus();
    }
  });

  closeBtn.addEventListener("click", function () {
    isOpen = false;
    panel.classList.remove("bai-open");
  });

  sendBtn.addEventListener("click", function () {
    sendMessage(inputEl.value);
  });

  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputEl.value);
    }
  });

  inputEl.addEventListener("input", autoGrow);
})();
