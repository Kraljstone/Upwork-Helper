'use client';

import Security from '@/components/Security';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function SecurityPage() {
  return (
    <ErrorBoundary>
      <Security />
    </ErrorBoundary>
  );
}
