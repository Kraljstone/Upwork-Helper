'use client';

import { memo } from 'react';
import Dashboard from '@/components/Dashboard';
import ErrorBoundary from '@/components/ErrorBoundary';

const Home = memo(() => {
  return (
    <ErrorBoundary>
      <Dashboard />
    </ErrorBoundary>
  );
});

Home.displayName = 'Home';

export default Home;
