import React from 'react'
import StatCard from './StatCard'
import ChartPlaceholder from './ChartPlaceholder'
import { TrendingUp, Users, Zap, Target } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          icon={TrendingUp}
          title="Total Revenue"
          value="$0"
          change="+0%"
          positive={true}
        />
        <StatCard 
          icon={Users}
          title="Active Customers"
          value="0"
          change="+0%"
          positive={true}
        />
        <StatCard 
          icon={Zap}
          title="Activations"
          value="0"
          change="+0%"
          positive={true}
        />
        <StatCard 
          icon={Target}
          title="Conversion Rate"
          value="0%"
          change="+0%"
          positive={true}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder title="Revenue Trend" />
        <ChartPlaceholder title="Customer Growth" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartPlaceholder title="Activity Distribution" />
        <ChartPlaceholder title="Sales Pipeline" />
        <ChartPlaceholder title="Team Performance" />
      </div>

      {/* Data Table Placeholder */}
      <div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Activities</h2>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div className="w-full h-4 bg-slate-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
