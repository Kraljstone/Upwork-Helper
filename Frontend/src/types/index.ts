export interface UserProfile {
  id: string;
  name: string;
  email: string;
  skills: string[];
  hourlyRate: number;
  jobCategories: string[];
  resumeUrl?: string;
  portfolioUrl?: string;
}

export interface JobFilter {
  budgetRange: {
    min: number;
    max: number;
    type: 'fixed' | 'hourly';
  };
  jobType: 'short-term' | 'long-term' | 'both';
  includeKeywords: string[];
  excludeKeywords: string[];
  clientLocation?: string;
  minClientRating: number;
}

export interface ApplicationRule {
  maxApplicationsPerDay: number;
  autoPauseThreshold: number;
  enableAutoPause: boolean;
}

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  budget: number;
  budgetType: 'fixed' | 'hourly';
  clientName: string;
  clientRating: number;
  postedDate: string;
  matchScore: number;
  isApplied: boolean;
  status: 'available' | 'applied' | 'interview' | 'hired' | 'declined';
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  clientName: string;
  appliedDate: string;
  status: 'pending' | 'viewed' | 'interview' | 'hired' | 'declined';
  proposalText: string;
  bidAmount: number;
}

export interface Analytics {
  totalApplications: number;
  responseRate: number;
  successRate: number;
  totalEarnings: number;
  averageBidAmount: number;
  applicationsToday: number;
}