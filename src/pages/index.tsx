import React, { useEffect, useState } from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import LandingPageImage from '../components/LandingPageImage';
import LazyShow from '../components/LazyShow';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Team from '../components/Team';
import { Counter } from '../components/Timer';
import config from '../config/index.json';
import { TimeLeft } from '../utils/utils';

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date(2022, 5, 10, 19, 0, 0, 0) - +new Date();

    let timeLeft: TimeLeft = {} as TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { company } = config;
  const { logo } = company;

  useEffect(() => {
    if (+new Date(2022, 5, 10, 19, 0, 0, 0) - +new Date() > 0)
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  });

  const fullsite = (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <LandingPage />
          </div>
        </div>
        <LandingPageImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <About />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Services />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Portfolio />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Team />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Footer />
        </>
      </LazyShow>
    </div>
  );

  const countdown = (
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
      <Counter />
    </div>
  );

  return (
    <div className="App">
      {!(timeLeft.hours || timeLeft.minutes || timeLeft.seconds)
        ? fullsite
        : countdown}
    </div>
  );
}

export default App;
