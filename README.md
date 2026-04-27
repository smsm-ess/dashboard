# Mission Control Dashboard

An exact replica of your workspace dashboard, now built as a React application with Supabase real-time data integration.

## Features

- ✅ **Exact UI Replica** – Identical design and functionality to your current dashboard
- ✅ **Real-time Sync** – Connected to Supabase `mc_state` table
- ✅ **All 9 Tabs** – CS Command, Account Health, Client Briefs, Live Intel, Active Customers, Projects, Notes, Command Center, Docs Portal
- ✅ **Modern Stack** – React 18 + Vite + Tailwind CSS
- ✅ **Dark Theme** – Plus Jakarta Sans typography, glass morphism, purple accents
- ✅ **Responsive** – Works on desktop and mobile

## Tab Overview

| Tab | Purpose |
|-----|---------|
| **CS Command** | Account activity heatmap with email/call metrics |
| **Account Health** | Track account status, snapshots, and health insights |
| **Client Briefs** | Store and manage client profile briefs |
| **Live Intel** | Real-time intelligence feed from all sources |
| **Active Customers** | HubSpot revenue data and subscription ledger |
| **Projects** | Kanban board for strategic projects |
| **Notes** | Scratchpad for deep work brainstorming |
| **Command Center** | Autonomous agent fleet + decision ledger |
| **Docs Portal** | Foundational documentation and integrations |

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Supabase credentials are already embedded in the code. In production, move them to `.env`:

```env
VITE_SUPABASE_URL=https://ffgrtkcabogwiwipjnqd.supabase.co
VITE_SUPABASE_KEY=your_anon_key_here
```

### 3. Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### 4. Production Build

```bash
npm run build
```

## Data Flow

Your workspace data syncs automatically:

```
Google Sheets (Email, Call, Meeting, Token tabs)
           ↓
master_data_sync_qa.js
           ↓
Supabase `mc_state` table
           ↓
Dashboard (Real-time subscriptions)
```

## Key Files

- `src/WorkspaceDashboard.jsx` – Main dashboard component
- `src/main-workspace.jsx` – React entry point
- `src/index.css` – Tailwind + custom styles
- `vercel.json` – Vercel deployment config
- `vite.config.js` – Vite build settings

## Gradual React Migration

This dashboard started as an HTML replica. Components are being gradually refactored to React:

- [x] Setup React + Vite + Tailwind
- [x] Connect to Supabase
- [ ] Migrate Sidebar to React component
- [ ] Migrate Header to React component
- [ ] Migrate CS Command tab to React
- [ ] Migrate Account Health to React
- [ ] Refactor other tabs iteratively

## Deployment on Vercel

1. Vercel auto-deploys on push to `main`
2. Environment variables are pre-configured
3. Build output: `dist/` directory

Your dashboard is live at your Vercel domain once deployed!

## Customization

### Colors & Theme

Edit CSS variables in `src/index.css`:

```css
:root {
  --bg: #0a0a0f;
  --accent: #a855f7;
  --success: #10b981;
  --danger: #ef4444;
}
```

### Data Updates

The dashboard syncs every time your `master_data_sync_qa.js` script runs (your HEARTBEAT schedule). No manual refresh needed.

### Adding New Tabs

1. Create a new page component in `src/pages/`
2. Add navigation button in Sidebar
3. Hook into your `mc_state` Supabase table

## Tech Stack

- **React 18** – UI framework
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first styling
- **Supabase** – Real-time backend
- **Plus Jakarta Sans** – Typography
- **Recharts** – Data visualization (ready to use)

## Support

For issues or enhancements:

1. Check the existing tabs for reference patterns
2. Refer to `/docs` in the dashboard for foundational documentation
3. Sync data is always in Supabase `mc_state` table

## License

MIT
