'use client';

import ProfileSettings from '@/components/ProfileSettings';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function ProfilePage() {
  return (
    <ErrorBoundary>
      <ProfileSettings />
    </ErrorBoundary>
  );
}
