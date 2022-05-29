import React from 'react';

import Head from 'next/head';

import '../styles/main.css';
import { Counter } from '../components/Timer';

function MyApp({ Component, pageProps }: any) {
  const releaseDate = new Date(2022, 5, 6, 19, 0, 0, 0);
  const today = new Date();
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="assets/images/logo2circlesmall.png" />
        <title>Woodz kozijnen</title>
      </Head>
      {today.getTime() <= releaseDate.getTime() ? (
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <div className="container">
            <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
              <div className="text-center">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Woodz
                  <span className="text-primary"> Kozijnen</span>
                </h2>
                <h3 className="text-xl md:text-3xl mt-10">Onder constructie</h3>
                <p className="text-md md:text-xl mt-10">
                  Vragen? mail met info@woodzkozijnen.nl of bel Bas- 06 53 94 22
                  78
                </p>
              </div>
              <Counter />
            </div>
          </div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
