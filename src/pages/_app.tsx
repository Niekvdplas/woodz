import React from 'react';

import Head from 'next/head';

import '../styles/main.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="assets/images/logo2circlesmall.png" />
        <title>Woodz kozijnen</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
