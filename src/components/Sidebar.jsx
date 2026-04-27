import React from 'react'
import { Menu, BarChart3, Users, Settings, FileText, Zap } from 'lucide-react'

export default function Sidebar({ open }) {
  const navItems = [
    { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
    { icon: Users, label: 'Accounts', id: 'accounts' },
    { icon: FileText, label: 'Reports', id: 'reports' },
    { icon: Zap, label: 'Activities', id: 'activities' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ]

  return (
    <aside className={`${open ? 'w-64' : 'w-20'} bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col`}>
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {open && <span className="font-bold text-white text-lg">Flash</span>}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {open && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center justify-center p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </aside>
  )
}
