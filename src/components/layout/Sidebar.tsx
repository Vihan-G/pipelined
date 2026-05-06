'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, LayoutGrid, ListChecks, MessageSquare } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs'
import { cn } from '@/lib/utils'

type NavItem = { href: string; label: string; icon: typeof LayoutGrid; matchPrefix?: string }

const NAV: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { href: '/applications', label: 'Applications', icon: ListChecks, matchPrefix: '/applications' },
  { href: '/community', label: 'Community', icon: MessageSquare, matchPrefix: '/community' },
  { href: '/stats', label: 'Stats', icon: BarChart3 },
]

export function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()
  const displayName =
    user?.fullName || user?.firstName || user?.primaryEmailAddress?.emailAddress || 'Account'

  return (
    <aside className="hidden md:flex md:w-[260px] md:flex-col md:border-r md:border-[#e2e8f0] md:bg-[#f8fafc]">
      <div className="flex h-16 items-center px-6">
        <Link href="/dashboard" className="flex items-center gap-2 text-base font-semibold tracking-tight text-[#0f172a]">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-[#6366f1] text-xs font-bold text-white"
          >
            p
          </span>
          pipelined
        </Link>
      </div>
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {NAV.map(({ href, label, icon: Icon, matchPrefix }) => {
            const active = matchPrefix
              ? pathname === href || pathname.startsWith(`${matchPrefix}/`)
              : pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                    active
                      ? 'bg-[#eef2ff] text-[#4338ca]'
                      : 'text-[#64748b] hover:bg-[#eef2ff]/60 hover:text-[#0f172a]',
                  )}
                >
                  <Icon size={16} className={active ? 'text-[#6366f1]' : 'text-[#94a3b8]'} />
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="border-t border-[#e2e8f0] px-4 py-4">
        <div className="flex items-center gap-3">
          <UserButton />
          <span className="truncate text-sm text-[#0f172a]">{displayName}</span>
        </div>
      </div>
    </aside>
  )
}
