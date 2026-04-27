import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function StatCard({ icon: Icon, title, value, change, positive }) {
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-2">{value}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-sm font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
            {positive && <TrendingUp className="w-4 h-4 text-green-500" />}
          </div>
        </div>
        <div className="p-3 bg-slate-800 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-500" />
        </div>
      </div>
    </div>
  )
}
