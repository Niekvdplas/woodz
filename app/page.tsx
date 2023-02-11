import About from "../components/About";
import Canvas from "../components/Canvas";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import LandingPageImage from "../components/LandingPageImage";
import LazyShow from "../components/LazyShow";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import { client } from "../lib/sanity-client";
import { Info } from "../typings";

async function page() {
  const data = await client.fetch(`*[0]`) as Info;
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
    <div className={`relative bg-background`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
        >
          <Header logo={data.logo}/>
          <LandingPage />
        </div>
      </div>
      <LandingPageImage img={data.hoofdfoto}/>
    </div>
    <Canvas />
    <LazyShow>
      <>
        <About info={data.about} />
        <Canvas />
      </>
    </LazyShow>
    <LazyShow>
      <>
        <Services info={data.betekenen}/>
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
        <Footer info={data.contact} />
      </>
    </LazyShow>
  </div>
  )
}

export default page
