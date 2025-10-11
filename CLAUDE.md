# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SuperKitt Official Website - A bilingual (Chinese/English) corporate website for SuperKitt, a technology company providing IT solutions for Chinese enterprises going global. The site showcases services, case studies, and provides customer inquiry capabilities.

## Current State

This is a greenfield project. Only `project.yaml` exists, containing the complete specification. No code has been implemented yet.

## Architecture (Target)

**Tech Stack:**
- Frontend: Next.js 14 + React + TailwindCSS
- Animation: Framer Motion
- Icons: lucide-react
- i18n: next-i18next
- Forms: React Hook Form + Webhook integration
- Deployment: Vercel

**Page Structure:**
- `/` - Home (hero, services overview, partners, CTA)
- `/services` - Detailed service categories (7 categories covering cloud, security, AI, etc.)
- `/cases` - Case studies with problem → solution → results template
- `/about` - Company mission and tech partners
- `/contact` - Contact form (fields: name, email, company, requirements)
- `/privacy` - Privacy and compliance information

**Service Categories (7 total):**
1. Global Cloud & Architecture
2. Compliance & Security (GDPR, SOC 2, ISO27001)
3. Website & Application Internationalization
4. Marketing & Automation
5. AI & Intelligence
6. System Integration & Data Services
7. Cross-border E-commerce Tech
8. Technical Outsourcing & Consulting

## Branding Specifications

**Colors:**
- Primary: `#0A1F44` (deep blue)
- Secondary: `#00C4CC` (cyan)
- Background: `#FFFFFF`
- Accent: `#111827`

**Typography:**
- Inter (English)
- Noto Sans SC (Chinese)

**Design Principles:**
- Clean, modern, international aesthetic
- Soft card shadows with scroll-in animations
- Hover effects on interactive elements
- Fixed/collapsing top navigation
- Hero section with particle background effect

## Development Commands (To be implemented)

Once the Next.js project is scaffolded, typical commands will be:

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking (if TS is used)
```

## Key Requirements

**Internationalization:**
- All content must support Chinese and English
- Use next-i18next for translations
- Language switcher in navigation

**SEO:**
- Meta tags for all pages
- Sitemap.xml generation
- robots.txt
- Target Lighthouse score: 90+

**Contact Form:**
- Fields: Name, Email, Company, Requirements
- Submit to webhook or email
- Email: service@superkitt.com

**Performance:**
- Mobile-responsive design
- Fast page loads (optimized for Vercel deployment)
- CDN-friendly static generation where possible

## Content Tone

- Professional, trustworthy, technology-driven
- International perspective
- Concise language suitable for business decision-makers
- Focus on technical capabilities and global vision

## References

- Full project specification: `project.yaml:1-171`
- Partner logos needed: AWS, Azure, Cloudflare, OpenAI
- ~~WeChat QR code asset: `wechat_qr.png` (to be added)~~
