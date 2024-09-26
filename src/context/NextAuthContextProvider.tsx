'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

const NextAuthContextProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthContextProvider;
