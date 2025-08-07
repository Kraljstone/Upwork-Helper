export const SECTIONS = {
  DASHBOARD: 'dashboard',
  PROFILE: 'profile',
  DISCOVERY: 'discovery',
  APPLICATIONS: 'applications',
  ANALYTICS: 'analytics',
  SECURITY: 'security',
} as const;

export const STATUS_COLORS = {
  pending: 'text-amber-600 bg-amber-100',
  viewed: 'text-blue-600 bg-blue-100',
  interview: 'text-purple-600 bg-purple-100',
  hired: 'text-emerald-600 bg-emerald-100',
  declined: 'text-red-600 bg-red-100',
  available: 'text-emerald-600 bg-emerald-100',
  applied: 'text-blue-600 bg-blue-100',
} as const;

export const MATCH_SCORE_COLORS = {
  high: 'text-emerald-600 bg-emerald-100',
  medium: 'text-amber-600 bg-amber-100',
  low: 'text-red-600 bg-red-100',
} as const;

export const DEFAULT_PROFILE = {
  name: 'John Doe',
  email: 'john@example.com',
  hourlyRate: 65,
  skills: ['React', 'TypeScript', 'Node.js', 'Python'],
  jobCategories: ['Web Development', 'Frontend Development'],
} as const;

export const DEFAULT_FILTERS = {
  budgetMin: 500,
  budgetMax: 5000,
  budgetType: 'fixed' as const,
  jobType: 'both' as const,
  includeKeywords: 'React, Frontend, JavaScript',
  excludeKeywords: 'WordPress, PHP',
  minClientRating: 4.0,
} as const;

export const DEFAULT_RULES = {
  maxApplicationsPerDay: 20,
  autoPauseThreshold: 10,
  enableAutoPause: true,
} as const; 