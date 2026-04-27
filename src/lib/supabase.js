import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ffgrtkcabogwiwipjnqd.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZ3J0a2NhYm9nd2l3aXBqbnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5Mzk5MzcsImV4cCI6MjA4OTUxNTkzN30.hRhRWoCMkfMuBRC1TJsxa9IhbKRsQ287t3GmoEs_RbU'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Fetch dashboard data from mc_state table
export async function fetchDashboardData() {
  try {
    const { data, error } = await supabase
      .from('mc_state')
      .select('data')
      .limit(1)
      .single()

    if (error) throw error
    return data?.data || null
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return null
  }
}

// Subscribe to real-time updates
export function subscribeToUpdates(callback) {
  const subscription = supabase
    .channel('mc_state_changes')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'mc_state' },
      (payload) => callback(payload)
    )
    .subscribe()

  return subscription
}
