import { SignIn } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in · pipelined',
  description: 'Sign in to track your CS recruiting pipeline.',
}

export default function SignInPage() {
  return <SignIn />
}
