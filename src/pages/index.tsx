import React, { useState } from 'react';

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

function App() {
  const releaseDate = new Date(2022, 5, 2, 9, 56, 0, 0);
  const today = new Date();
  const { company } = config;
  const { logo } = company;
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
  );

  const [show, setShow] = useState(countdown);
  if (today.getTime() > releaseDate.getTime() && show === countdown) {
    setShow(fullsite);
  }

  return show;
}

export default App;
