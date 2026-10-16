import React from 'react'
import { MessageCircle } from 'lucide-react'

type Props = { className?: string; label?: string }

/**
 * Opens the existing Barney AI chat widget (public/widget/barney-ai-widget.js) by clicking its launcher.
 * Rendered as a real link so it is visible in the prerendered HTML; falls back to /contact if the widget
 * has not loaded.
 */
export default function AskBarneyAiButton({ className = 'btn btn-outline', label = 'Ask Barney AI about my projects' }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const launcher = document.getElementById('bai-launcher')
    if (!launcher) return
    e.preventDefault()
    if (!document.getElementById('bai-panel')?.classList.contains('bai-open')) launcher.click()
  }

  return (
    <a href="/contact" onClick={handleClick} className={className}>
      <MessageCircle size={16} aria-hidden="true" /> {label}
    </a>
  )
}
