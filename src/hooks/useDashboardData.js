import { useState, useEffect } from 'react'
import { fetchDashboardData, subscribeToUpdates } from '../lib/supabase'

export function useDashboardData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Initial fetch
    const loadData = async () => {
      try {
        setLoading(true)
        const dashboardData = await fetchDashboardData()
        setData(dashboardData)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    loadData()

    // Subscribe to real-time updates
    const subscription = subscribeToUpdates((payload) => {
      console.log('Real-time update received:', payload)
      loadData() // Refetch on update
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { data, loading, error }
}
