'use client';

import { SessionProvider } from 'next-auth/react'; // Assuming you're using NextAuth.js
import React from 'react';

function SessionProviderWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionProviderWrapper;