# Mission Control Dashboard

A modern React dashboard connected to Supabase for real-time data visualization.

## Features

- ✅ Real-time database sync with Supabase
- ✅ Responsive dark theme UI
- ✅ Live stat cards and charts
- ✅ Real-time updates via Supabase subscriptions
- ✅ Built with Vite + React 18 + Tailwind CSS

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=https://ffgrtkcabogwiwipjnqd.supabase.co
VITE_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZ3J0a2NhYm9nd2l3aXBqbnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5Mzk5MzcsImV4cCI6MjA4OTUxNTkzN30.hRhRWoCMkfMuBRC1TJsxa9IhbKRsQ287t3GmoEs_RbU
```

### 3. Run Development Server

```bash
npm run dev
```

The dashboard will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Database Connection

The dashboard connects to your Supabase `mc_state` table and:

- **Fetches** the latest dashboard data on mount
- **Subscribes** to real-time changes via Supabase RealtimeClient
- **Auto-updates** when data changes in the database

### Data Structure

Your `mc_state` table should contain:
```json
{
  "data": {
    "stats": {
      "totalRevenue": 0,
      "activeCustomers": 0,
      "activations": 0,
      "conversionRate": 0
    },
    "activities": [...],
    "charts": {...}
  }
}
```

## Usage

### Using the useDashboardData Hook

```jsx
import { useDashboardData } from './hooks/useDashboardData'

export function MyComponent() {
  const { data, loading, error } = useDashboardData()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return <div>{JSON.stringify(data)}</div>
}
```

### Direct Supabase Access

```jsx
import { fetchDashboardData } from './lib/supabase'

const data = await fetchDashboardData()
```

## Deployment

The dashboard is configured for deployment on **Vercel**. Simply:

1. Push to the `main` branch
2. Vercel will automatically build and deploy
3. Your dashboard will be live at your Vercel domain

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Supabase** - Real-time database
- **Recharts** - Data visualization (ready for implementation)
- **Lucide React** - Icon library

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_KEY` | Your Supabase anon/public key |

## Contributing

1. Clone the repo
2. Create a feature branch
3. Make your changes
4. Push and create a PR

## License

MIT
