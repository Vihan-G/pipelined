import { currentUser } from '@clerk/nextjs/server'

function greet(hour: number) {
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export async function TopBar({ action }: { action?: React.ReactNode }) {
  const user = await currentUser()
  const name = user?.firstName || user?.fullName || 'there'
  const greeting = `${greet(new Date().getHours())}, ${name}.`

  return (
    <header className="flex h-16 items-center justify-between border-b border-[#e2e8f0] bg-white px-6 md:px-8">
      <h1 className="text-lg font-semibold tracking-tight text-[#0f172a]">{greeting}</h1>
      {action ? <div className="flex items-center gap-2">{action}</div> : null}
    </header>
  )
}
