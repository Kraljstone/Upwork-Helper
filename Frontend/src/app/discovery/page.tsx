'use client';

import JobDiscovery from '@/components/JobDiscovery';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function DiscoveryPage() {
  return (
    <ErrorBoundary>
      <JobDiscovery />
    </ErrorBoundary>
  );
}
