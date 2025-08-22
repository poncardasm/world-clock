# World Clock - AI Assistant Guide

## Project Overview

This is a vanilla JavaScript world clock web app displaying real-time clocks for 6 time zones with automatic dark mode support and time format toggle (12H/24H).

## Architecture & Key Files

- **`index.html`**: Single-page app with embedded dark mode detection script and static clock cards
- **`script.js`**: Core clock logic using `Intl.DateTimeFormat` and timezone-aware Date objects
- **`styles.css`**: CSS custom properties for theming with automatic dark mode via `prefers-color-scheme`
- **`assets/`**: Favicon package and OpenGraph images for social sharing

## Time Zone Management

The app uses specific IANA timezone identifiers in `script.js`:

- UTC: `'UTC'`
- Helsinki: `'Europe/Helsinki'`
- Manila: `'Asia/Manila'`
- San Francisco: `'America/Los_Angeles'`
- Beijing: `'Asia/Shanghai'`
- Netherlands: `'Europe/Amsterdam'`

Each clock card has structured IDs: `{location}-time`, `{location}-date`, `{location}-location` (e.g., `helsinki-time`).

## Key Patterns & Conventions

### Theme System

- CSS custom properties for light/dark themes in `:root` and `.dark-theme`
- Automatic dark mode detection via inline script in `<head>` using `matchMedia('(prefers-color-scheme: dark)')`
- No manual theme toggle - follows system preference only

### Time Formatting

- Global `is24Hour` state controls all clocks simultaneously
- Uses `toLocaleTimeString()` with dynamic options from `getTimeOptions()`
- AM/PM uppercase conversion: `.replace(/am|pm/i, (match) => match.toUpperCase())`
- Date formatting uses `'en-GB'` locale with full date options

### Day/Night Indicators

- Each location shows ☀️ (6 AM - 6 PM) or 🌙 via `data-daynight` attribute
- Updated by `isDaytime(hour)` function checking local time in each zone

### Real-time Updates

- `setInterval(updateClocks, 1000)` updates all 6 clocks every second
- Single `updateClocks()` function calls `updateClock()` for each timezone

## Development Workflow

- **No build process**: Direct file editing and browser refresh
- **Testing**: Open `index.html` in browser - works offline
- **Deployment**: Static file hosting (GitHub Pages, Netlify, etc.)

## Adding New Time Zones

1. Add clock card HTML structure in `index.html` with consistent ID pattern
2. Add corresponding `updateClock()` call in `updateClocks()` function
3. Update grid layout may auto-adjust via `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`

## PWA Features

- Basic PWA manifest at `site.webmanifest` with app icons
- Comprehensive favicon package in `assets/favicon/`
- OpenGraph meta tags for social media sharing

## CSS Architecture

- Mobile-first responsive design with single `@media (max-width: 768px)` breakpoint
- Consistent spacing using `rem` units
- Hover animations on clock cards: `transform: translateY(-5px)`
- CSS Grid for responsive clock layout
