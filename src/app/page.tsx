'use client';
import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data, status } = useSession();
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(function (registration) {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope,
          );
        })
        .catch(function (err) {
          console.log('ServiceWorker registration failed: ', err);
        });
    }
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {status === 'authenticated' ? (
          <div className={styles.profile}>
            <p>Hey! {data.user?.name}</p>
            <Image
              src={data.user?.image ?? ``}
              alt="pfp"
              width={50}
              height={50}
            />
            {/*NOTE: Uncomment below if needed */}
            {/* <p>Session will be expired at: {data.expires}</p>
          <li>
            Access Token: {data.accessToken.slice(0, 3)} ...{' '}
            {data.accessToken.slice(-3)}
          </li>
          <li>
            Id Token (JWT): {data.idToken.slice(0, 3)} ...{' '}
            {data.idToken.slice(-3)}
          </li> */}
          </div>
        ) : null}
        {status === 'loading' ? 'Loading...' : null}
      </main>
      <footer className={styles.footer}>
        <Image
          src="/icon-128x128.png"
          alt="Footer icon"
          width={16}
          height={16}
        />
        {status === 'authenticated' ? (
          <a onClick={() => signOut()}>Logout</a>
        ) : null}
        {status === 'unauthenticated' ? (
          <a onClick={() => signIn()}>Login</a>
        ) : null}
      </footer>
    </div>
  );
}
