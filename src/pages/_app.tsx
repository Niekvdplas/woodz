import React from 'react';

import Head from 'next/head';

import '../styles/main.css';
import { Counter } from '../components/Timer';
import config from '../config/index.json';

function MyApp({ Component, pageProps }: any) {
  const releaseDate = new Date(2022, 5, 10, 19, 0, 0, 0);
  const today = new Date();
  const { company } = config;
  const { logo } = company;
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
                <img
                  alt="logo"
                  src={logo}
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '50%',
                  }}
                />
                <h3 className="text-xl md:text-3xl mt-10">Onder constructie</h3>
                <p className="text-md md:text-xl mt-10">
                  Vragen? mail met info@woodzkozijnen.nl of bel Bas- 0653942278
                </p>
              </div>
              <Counter />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
