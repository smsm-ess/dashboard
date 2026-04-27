import React from 'react'

export default function ChartPlaceholder({ title }) {
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="h-48 bg-slate-800 rounded-lg flex items-center justify-center">
        <span className="text-slate-500">Chart placeholder - Ready for data</span>
      </div>
    </div>
  )
}
