import React from 'react'
import { Menu, Bell, User, Search } from 'lucide-react'

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold text-white">Mission Control</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-white placeholder-slate-500 outline-none"
          />
        </div>

        <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
