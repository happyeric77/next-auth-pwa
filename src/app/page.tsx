'use client';
import Image from 'next/image';
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
    <div>
      {status === 'authenticated' ? (
        <div>
          <p>Hey! {data.user?.name}</p>
          {/*NOTE: Uncomment below if needed */}
          {/* <p>Session will be expired at: {data.expires}</p>
          <li>
            Access Token: {data.accessToken.slice(0, 3)} ...{' '}
            {data.accessToken.slice(-3)}
          </li>
          <li>
            Id Token (JWT): {data.idToken.slice(0, 3)} ...{' '}
            {data.idToken.slice(-3)}
          </li>
          <img
            src={data.user?.image ?? ``}
            alt=""
            style={{ borderRadius: '50px' }}
          /> */}
          <div>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        </div>
      ) : (
        <button onClick={() => signIn('google', {}, { prompt: 'login' })}>
          Login in with Google
        </button>
      )}
    </div>
  );
}
