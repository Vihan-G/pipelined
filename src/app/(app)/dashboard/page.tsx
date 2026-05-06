import type { Metadata } from 'next'
import { TopBar } from '@/components/layout/TopBar'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return (
    <>
      <TopBar
        action={
          <button
            type="button"
            className="rounded-md bg-[#6366f1] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#4f46e5]"
            disabled
          >
            + Add application
          </button>
        }
      />
      <main className="flex-1 px-6 py-8 md:px-8">
        <section className="rounded-lg border border-dashed border-[#e2e8f0] bg-[#f8fafc] p-10 text-center">
          <h2 className="text-base font-semibold text-[#0f172a]">No applications yet</h2>
          <p className="mt-2 text-sm text-[#64748b]">
            Day 1 ships the shell. Kanban board, table, and the Add-application modal land in Day 2.
          </p>
        </section>
      </main>
    </>
  )
}
