import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/')

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-800">
        <h1 className="text-xl font-bold tracking-wider">SMOKE*SCREEN — DASHBOARD</h1>
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 text-sm">{user?.email}</span>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white">Log out</Link>
        </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h2 className="text-lg font-semibold mb-4">Live Feed</h2>
          <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
            Camera / Stream Preview — AI Output Here
          </div>
        </div>
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h2 className="text-lg font-semibold mb-4">Controls</h2>
          <div className="space-y-3">
            <button className="w-full p-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition">
              Start Transformation
            </button>
            <button className="w-full p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
              Face Swap
            </button>
            <button className="w-full p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
              Take Snapshot
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
