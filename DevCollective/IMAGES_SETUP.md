# 📸 Image Setup Instructions

## Your Professional Photos

Your professional headshots have been integrated throughout the app for maximum impact:

### Image 1: Professional Headshot (Formal)
**Save to:**
```
c:\FrontlineDigital\DevCollective\frontend\public\images\profile\barney.jpg
```

**Used in:**
- ✅ Profile page (large circular photo)
- ✅ Marketplace listing (developer card with photo)
- ✅ Dashboard (team member reference)

### Image 2: Casual Portrait (Leadership)
**Save to:**
```
c:\FrontlineDigital\DevCollective\frontend\public\images\profile\barney-casual.jpg
```

**Used in:**
- ✅ Home page "Meet the Founder" section
- ✅ About page (full-size founder feature)
- ✅ Leadership/team showcase areas

## 📁 Complete Image Directory Structure

```
frontend/public/images/
├── profile/
│   ├── barney.jpg           # Formal professional headshot
│   └── barney-casual.jpg    # Casual leadership portrait
├── logos/
│   ├── frontline-digital-logo.png
│   └── favicon.svg
├── portfolio/
│   ├── kristie-store.png
│   └── blog-api.png
├── team/
│   └── [other team members]
└── backgrounds/
    └── [hero backgrounds]
```

## 🎨 Recommended Image Specs

- **Format:** JPG (for photos) or PNG (for logos)
- **Size:** 1200x1200px or larger
- **File Size:** Under 500KB (use compression if needed)
- **Aspect Ratio:** Square (1:1) for circular profiles

## ✅ Setup Steps

1. **Save Image 1 (Formal)** → `/images/profile/barney.jpg`
2. **Save Image 2 (Casual)** → `/images/profile/barney-casual.jpg`
3. Run: `npm run dev`
4. Visit:
   - Home: `http://localhost:3000/` (see founder section)
   - About: `http://localhost:3000/about` (full founder page)
   - Profile: `http://localhost:3000/profile` (professional photo)
   - Marketplace: `http://localhost:3000/marketplace` (developer card)

## 🚀 Pages & Features Using Your Photos

### Home Page
- **Founder Section** - Shows casual photo with intro
- Navigation link to About page and profile

### About Page (NEW!)
- **Hero Section** - Large founder photo with gradient effect
- Professional background timeline
- Core competencies and skills
- Mission statement and CTA

### Profile Page
- **Profile Sidebar** - Circular formal headshot
- Professional information and contact details
- Skills, experience, and portfolio

### Marketplace Page
- **Developer Card** - Formal photo in team listing
- Ratings, hourly rate, and hire button

## 🖼️ Additional Images (Optional)

When ready, add:
- **Portfolio:** Screenshots of Kristie Store, blog API
- **Logos:** Frontline Digital logo variations
- **Backgrounds:** Hero section backgrounds
- **Team:** Any other team members or collaborators

---

**Note:** File names are case-sensitive on Linux/Mac but flexible on Windows. Make sure paths match exactly in the code.

