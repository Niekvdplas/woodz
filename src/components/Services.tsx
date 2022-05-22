import React, { useState } from 'react';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import config from '../config/index.json';
import Divider from './Divider';

const Services = () => {
  let shown = -1;
  const { product } = config;
  const map = {
    0: 'Deuren',
    1: 'Kozijnen',
    2: 'Volgende..',
    3: 'Volgende...',
    4: 'Volgende....',
    5: 'Volgende.....',
  };
  const reset = [
    <h2
      key="0"
      className={`w-full my-2 text-sm md:text-5xl font-bold leading-tight text-center text-black`}
    >
      Deuren
    </h2>,
    <h2
      key="1"
      className={`w-full my-2 text-sm md:text-5xl font-bold leading-tight text-center text-black`}
    >
      Kozijnen
    </h2>,
    <h2
      key="2"
      className={`w-full my-2 text-sm md:text-5xl font-bold leading-tight text-center text-black`}
    >
      Volgende..
    </h2>,
    <h2
      key="3"
      className={`w-full my-2 text-sm md:text-5xl font-bold leading-tight text-center text-black`}
    >
      Volgende...
    </h2>,
    <h2
      key="4"
      className={`w-full my-2 text-sm md:text-5xl font-bold leading-tight text-center text-black`}
    >
      Volgende....
    </h2>,
    <h2
      key="5"
      className={`w-full my-2 text-sm md:text-5xl font-bold leading-tight text-center text-black`}
    >
      Volgende.....
    </h2>,
  ];
  const [categories, setCategories] = useState(reset);
  const [description, setDescription] = useState('Hier kan wat uitleg over: ');
  const [firstItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="diensten">
      <div className={`container max-w-5xl mx-auto m-2`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`grid grid-cols-3 gap-4`}>
          {categories[0]}
          <div>{categories[1]}</div>
          <div>{categories[2]}</div>
          <div className="col-span-2">
            <Carousel
              additionalTransfrom={0}
              arrows
              removeArrowOnDeviceType={['tablet', 'mobile']}
              afterChange={(__, { currentSlide }) => {
                shown = Number(firstItem?.photos[currentSlide - 2]?.category);
                const cats = reset;
                cats[shown] = (
                  <h1
                    className={`w-full my-2 text-sm md:text-5xl font-bold leading-tight text-center text-primary`}
                  >
                    {`${(map as any)[shown]}`}
                  </h1>
                );
                setDescription(
                  `Hier kan wat uitleg over: ${(map as any)[shown]}`
                );
                setCategories(cats);
              }}
              autoPlay
              autoPlaySpeed={5000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {firstItem?.photos.map((image, index) => (
                <img
                  key={index}
                  src={image.imageUrl}
                  style={{
                    display: 'block',
                    margin: 'auto',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center',
                    maxHeight: '550px',
                    padding: '5px',
                  }}
                  alt={image.alt}
                />
              ))}
            </Carousel>
          </div>
          <div
            className="text-center mt-4 max-w-2xl text-sm md:text-xl text-gray-500 lg:mx-auto"
            style={{ height: '80%' }}
          >
            {description}
          </div>
          <div>{categories[3]}</div>
          <div>{categories[4]}</div>
          <div>{categories[5]}</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
