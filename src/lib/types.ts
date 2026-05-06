import type { Difficulty, QuestionCategory, RoleType, RoundOutcome, RoundType, Status } from './constants'

export interface Profile {
  id: string
  clerk_id: string
  email: string | null
  name: string | null
  username: string | null
  created_at: string
}

export interface Application {
  id: string
  user_id: string
  company: string
  role: string
  status: Status
  applied_date: string | null
  location: string | null
  salary_min: number | null
  salary_max: number | null
  job_url: string | null
  notes: string | null
  is_referral: boolean
  created_at: string
  updated_at: string
}

export interface InterviewRound {
  id: string
  application_id: string
  round_type: RoundType
  scheduled_at: string | null
  completed_at: string | null
  notes: string | null
  outcome: RoundOutcome | null
  created_at: string
}

export interface CommunityQuestion {
  id: string
  user_id: string
  company: string
  role_type: RoleType
  question: string
  category: QuestionCategory
  difficulty: Difficulty | null
  upvotes: number
  year: number | null
  notes: string | null
  is_verified: boolean
  created_at: string
}

export interface QuestionVote {
  id: string
  question_id: string
  user_id: string
}
