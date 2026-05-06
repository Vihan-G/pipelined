import { SignUp } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign up · pipelined',
  description: 'Create a free pipelined account.',
}

export default function SignUpPage() {
  return <SignUp />
}
