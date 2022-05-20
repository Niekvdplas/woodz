import React from 'react';

const Portfolio = () => {
  return (
    <section className={`bg-background py-8`} id="portfolio">
      <h1
        className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
      >
        Portfolio
      </h1>
      <div className={`w-full mb-4`}>
        <div
          className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
        ></div>
      </div>
      <div className="text-center my-12">
        <div className="portfolio-items">
          <div
            className="grid md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-8 content-center"
            style={{
              marginRight: '15%',
              marginLeft: '15%',
            }}
          >
            <div className="col-span-1">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {' '}
                  <div className="hover-text">
                    <h4>Ook voor een mooie voordeur kunt u bij ons terecht</h4>
                  </div>
                  <img
                    src="assets/images/portfolio/door.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {' '}
                  <div className="hover-text">
                    <h4>Prachtige kozijnen, klaar voor transport</h4>
                  </div>
                  <img
                    src="assets/images/portfolio/frames.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </div>
                <div className="hover-bg">
                  {' '}
                  <div className="hover-text">
                    <h4>Prachtige kozijnen, klaar voor transport</h4>
                  </div>
                  <img
                    src="assets/images/portfolio/transport.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {' '}
                  <div className="hover-text">
                    <h4>Afgewerkte winkelpui</h4>
                  </div>
                  <img
                    src="assets/images/portfolio/storefront.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-8 content-center"
            style={{
              marginRight: '15%',
              marginLeft: '15%',
            }}
          >
            <div className="col-span-1">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {' '}
                  <div className="hover-text">
                    <h4>Before</h4>
                  </div>
                  <img
                    src="assets/images/portfolio/collage1.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {' '}
                  <div className="hover-text">
                    <h4>Tijdens</h4>
                  </div>
                  <img
                    src="assets/images/portfolio/collage2.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {' '}
                  <div className="hover-text">
                    <h4>After</h4>
                  </div>
                  <img
                    src="assets/images/portfolio/collage3.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
