import React from "react";
import App from "next/app";
import Head from "next/head";

import '../styles/main.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
        <link rel="shortcut icon" href="assets/images/logo2circlesmall.png" />

          <title>Woodz Kozijnen</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}