'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Use next/router in the pages directory
import { useEffect } from 'react';

function useAuth(redirectTo = '/login') {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push(`${redirectTo}?callbackUrl=${window.location.pathname}`);
    }
  }, [isAuthenticated, isLoading, router, redirectTo]);

  return { session, status, isAuthenticated, isLoading };
}

export default useAuth;
