import React from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import LandingPageImage from '../components/LandingPageImage';
import LazyShow from '../components/LazyShow';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';

import { client } from '../../lib/sanity-client';

const App = ({data}: any) => {
  console.log(data)
  return (
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
          <About info={data[0].about}/>
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
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Footer info={data[0].contact}/>
        </>
      </LazyShow>
    </div>
  );
};

export default App;

export async function getStaticProps() {
  const data = await client.fetch(`*`);
  return {
    props: {
      data
    },
    revalidate: 60,
  };
}