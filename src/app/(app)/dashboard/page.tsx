import type { Metadata } from 'next'
import { currentUser } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await currentUser()
  const greeting = user?.firstName ? `Good morning, ${user.firstName}.` : 'Good morning.'

  return (
    <div className="px-8 py-10">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#0f172a]">{greeting}</h1>
        <UserButton />
      </header>
      <p className="mt-6 text-sm text-[#64748b]">
        Dashboard kanban + stats land in Day 2. Auth is live — this page is gated by Clerk middleware.
      </p>
    </div>
  )
}
