import { useState, useCallback } from 'react';
import { UserProfile, JobFilter, ApplicationRule } from '@/types';
import { DEFAULT_PROFILE, DEFAULT_FILTERS, DEFAULT_RULES } from '@/constants';

export const useAppState = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [profile, setProfile] = useState<UserProfile>({
    id: '1',
    ...DEFAULT_PROFILE,
    skills: [...DEFAULT_PROFILE.skills],
    jobCategories: [...DEFAULT_PROFILE.jobCategories],
  });
  const [filters, setFilters] = useState<JobFilter>({
    budgetRange: {
      min: DEFAULT_FILTERS.budgetMin,
      max: DEFAULT_FILTERS.budgetMax,
      type: DEFAULT_FILTERS.budgetType,
    },
    jobType: DEFAULT_FILTERS.jobType,
    includeKeywords: DEFAULT_FILTERS.includeKeywords.split(', '),
    excludeKeywords: DEFAULT_FILTERS.excludeKeywords.split(', '),
    minClientRating: DEFAULT_FILTERS.minClientRating,
  });
  const [rules, setRules] = useState<ApplicationRule>(DEFAULT_RULES);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  }, []);

  const updateFilters = useCallback((updates: Partial<JobFilter>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  }, []);

  const updateRules = useCallback((updates: Partial<ApplicationRule>) => {
    setRules((prev) => ({ ...prev, ...updates }));
  }, []);

  return {
    activeSection,
    setActiveSection,
    profile,
    updateProfile,
    filters,
    updateFilters,
    rules,
    updateRules,
  };
};
