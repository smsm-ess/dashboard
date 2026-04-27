import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import CSCommand from './pages/CSCommand'
import AccountHealth from './pages/AccountHealth'
import ClientBriefs from './pages/ClientBriefs'
import LiveIntel from './pages/LiveIntel'
import ActiveCustomers from './pages/ActiveCustomers'
import Projects from './pages/Projects'
import Notes from './pages/Notes'
import CommandCenter from './pages/CommandCenter'
import DocsPortal from './pages/DocsPortal'
import './index.css'

export default function App() {
  const [currentTab, setCurrentTab] = useState('cs-command')
  const [appData, setAppData] = useState({
    activities: {},
    intel: [],
    briefs: [],
    tasks: [],
    subscriptions: [],
    invoices: [],
    notes: '',
    agents: [],
    decisions: [],
    account_health_report: { accounts: [], by_status: {} },
    outreach: { activities: [], metrics: {}, leaderboard: [] }
  })

  useEffect(() => {
    syncLoad()
  }, [])

  const syncLoad = async () => {
    try {
      const SUPABASE_URL = 'https://ffgrtkcabogwiwipjnqd.supabase.co'
      const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZ3J0a2NhYm9nd2l3aXBqbnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5Mzk5MzcsImV4cCI6MjA4OTUxNTkzN30.hRhRWoCMkfMuBRC1TJsxa9IhbKRsQ287t3GmoEs_RbU'
      
      const response = await fetch(`${SUPABASE_URL}/rest/v1/mc_state?id=eq.1`, {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        const rows = await response.json()
        if (rows && rows[0] && rows[0].data) {
          setAppData(rows[0].data)
        }
      }
    } catch (error) {
      console.error('Sync load error:', error)
    }
  }

  const renderTab = () => {
    switch (currentTab) {
      case 'cs-command':
        return <CSCommand data={appData} />
      case 'account-health':
        return <AccountHealth data={appData} setData={setAppData} />
      case 'client-briefs':
        return <ClientBriefs data={appData} />
      case 'live-intel':
        return <LiveIntel data={appData} />
      case 'active-customers':
        return <ActiveCustomers data={appData} />
      case 'projects':
        return <Projects data={appData} />
      case 'notes':
        return <Notes data={appData} setData={setAppData} />
      case 'command-center':
        return <CommandCenter data={appData} />
      case 'docs':
        return <DocsPortal />
      default:
        return <CSCommand data={appData} />
    }
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg)', color: 'var(--text-main)' }}>
      <Sidebar currentTab={currentTab} onTabChange={setCurrentTab} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header tab={currentTab} />
        <div style={{ flex: 1, overflow: 'auto', padding: '2.5rem' }}>
          {renderTab()}
        </div>
      </div>
    </div>
  )
}
