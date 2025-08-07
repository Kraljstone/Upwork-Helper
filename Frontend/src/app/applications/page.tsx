'use client';

import Applications from '@/components/Applications';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function ApplicationsPage() {
  return (
    <ErrorBoundary>
      <Applications />
    </ErrorBoundary>
  );
}
