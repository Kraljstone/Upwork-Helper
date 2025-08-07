'use client';

import Analytics from '@/components/Analytics';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function AnalyticsPage() {
  return (
    <ErrorBoundary>
      <Analytics />
    </ErrorBoundary>
  );
}
