/** NextAuth session extend: https://next-auth.js.org/getting-started/typescript#main-module */
import NextAuth, { Session as DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    // Specific to Google Auth
    accessToken: string;
    idToken: string; // JWT
  }
}
