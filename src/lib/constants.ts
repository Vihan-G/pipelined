export const STATUSES = {
  bookmarked: { label: 'Bookmarked', color: '#6b7280', bg: '#f3f4f6' },
  applied: { label: 'Applied', color: '#3b82f6', bg: '#eff6ff' },
  oa: { label: 'OA', color: '#8b5cf6', bg: '#f5f3ff' },
  phone_screen: { label: 'Phone Screen', color: '#f59e0b', bg: '#fffbeb' },
  onsite: { label: 'Onsite', color: '#f97316', bg: '#fff7ed' },
  offer: { label: 'Offer 🎉', color: '#10b981', bg: '#ecfdf5' },
  rejected: { label: 'Rejected', color: '#ef4444', bg: '#fef2f2' },
  withdrawn: { label: 'Withdrawn', color: '#9ca3af', bg: '#f9fafb' },
} as const

export type Status = keyof typeof STATUSES

export const STATUS_ORDER: Status[] = [
  'bookmarked',
  'applied',
  'oa',
  'phone_screen',
  'onsite',
  'offer',
  'rejected',
  'withdrawn',
]

export const KANBAN_COLUMNS: Status[] = ['applied', 'oa', 'phone_screen', 'onsite', 'offer', 'rejected']

export const ROUND_TYPES = {
  oa: 'Online Assessment',
  phone_screen: 'Phone Screen',
  technical: 'Technical',
  behavioral: 'Behavioral',
  system_design: 'System Design',
  onsite: 'Onsite',
  hr: 'HR',
} as const

export type RoundType = keyof typeof ROUND_TYPES

export const ROUND_OUTCOMES = {
  passed: 'Passed',
  failed: 'Failed',
  pending: 'Pending',
  no_show: 'No-show',
} as const

export type RoundOutcome = keyof typeof ROUND_OUTCOMES

export const ROLE_TYPES = {
  swe_intern: 'SWE Intern',
  swe_ng: 'SWE New Grad',
  pm_intern: 'PM Intern',
  pm_ng: 'PM New Grad',
  ds_intern: 'DS Intern',
  ds_ng: 'DS New Grad',
  quant: 'Quant',
  other: 'Other',
} as const

export type RoleType = keyof typeof ROLE_TYPES

export const QUESTION_CATEGORIES = {
  dsa: { label: 'DSA', accent: '#6366f1' },
  system_design: { label: 'System Design', accent: '#f97316' },
  behavioral: { label: 'Behavioral', accent: '#10b981' },
  domain: { label: 'Domain', accent: '#8b5cf6' },
  brain_teaser: { label: 'Brain Teaser', accent: '#f59e0b' },
} as const

export type QuestionCategory = keyof typeof QUESTION_CATEGORIES

export const DIFFICULTIES = ['easy', 'medium', 'hard'] as const
export type Difficulty = (typeof DIFFICULTIES)[number]
