'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

const ErrorBoundary = ({ children, fallback }: Props) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught by boundary:', error.error);
      setHasError(true);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener(
        'unhandledrejection',
        handleUnhandledRejection
      );
    };
  }, []);

  if (hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className='flex flex-col items-center justify-center min-h-[400px] p-8'>
        <AlertTriangle className='mb-4 w-16 h-16 text-red-500' />
        <h2 className='mb-2 text-xl font-bold text-slate-900'>
          Something went wrong
        </h2>
        <p className='mb-4 text-center text-slate-600'>
          We encountered an error while loading this section. Please try
          refreshing the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className='px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700'
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
