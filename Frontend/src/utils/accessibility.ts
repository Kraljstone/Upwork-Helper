export const getAriaLabel = (action: string, context?: string) => {
  return context ? `${action} ${context}` : action;
};

export const getStatusAriaLabel = (status: string) => {
  const statusMap: Record<string, string> = {
    pending: 'Application pending review',
    viewed: 'Application viewed by client',
    interview: 'Interview scheduled',
    hired: 'Job awarded',
    declined: 'Application declined',
    available: 'Job available to apply',
    applied: 'Already applied to this job',
  };
  return statusMap[status] || status;
};

export const getMatchScoreAriaLabel = (score: number) => {
  if (score >= 80) return `High match score of ${score}%`;
  if (score >= 60) return `Medium match score of ${score}%`;
  return `Low match score of ${score}%`;
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void
) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    callback();
  }
};
