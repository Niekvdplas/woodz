import React, { useRef, useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from 'reactstrap';

import config from '../config/index.json';
import Divider from './Divider';

const Services = () => {
  let shown = -1;
  const { product } = config;
  const carouselRef = useRef<any>();
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
  const initial = [
    <h1
      key="0"
      className={`w-full my-2 text-sm md:text-5xl font-bold leading-tight text-center text-primary`}
    >
      Deuren
    </h1>,
  ].concat(reset.slice(1, 6));
  const [categories, setCategories] = useState(initial);
  const [description, setDescription] = useState('Hier kan wat uitleg over: ');
  const [firstItem] = product.items;

  function getRandomPhoto(category: number, current: number) {
    const photos = firstItem?.photos;
    const categoryPhotos = photos?.filter((element) => {
      return element.category === category;
    });
    if (categoryPhotos?.length === 1) {
      return photos?.indexOf(categoryPhotos[0]!)! + 2;
    }
    const notSelf = categoryPhotos?.filter((element) => {
      return photos?.indexOf(element) !== current - 2;
    });
    const picked = notSelf![Math.floor(Math.random() * categoryPhotos!.length)];
    if (picked === undefined) {
      return photos?.indexOf(categoryPhotos![0]!)! + 2;
    }

    const index = photos!.indexOf(picked!);
    return index + 2;
  }

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
          <Button
            onClick={() =>
              carouselRef?.current?.goToSlide(
                getRandomPhoto(0, carouselRef?.current.state.currentSlide),
                {
                  skipBeforeChange: true,
                }
              )
            }
          >
            {categories[0]}
          </Button>
          <Button
            onClick={() =>
              carouselRef.current!.goToSlide(
                getRandomPhoto(1, carouselRef?.current.state.currentSlide),
                {
                  skipBeforeChange: true,
                }
              )
            }
          >
            {categories[1]}
          </Button>
          <Button
            onClick={() =>
              carouselRef?.current?.goToSlide(
                getRandomPhoto(2, carouselRef?.current.state.currentSlide),
                {
                  skipBeforeChange: true,
                }
              )
            }
          >
            {categories[2]}
          </Button>
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
              ref={carouselRef}
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
            style={{
              height: '80%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {description}
          </div>
          <Button
            onClick={() =>
              carouselRef?.current?.goToSlide(
                getRandomPhoto(3, carouselRef?.current.state.currentSlide)
              )
            }
          >
            {categories[3]}
          </Button>
          <Button
            onClick={() =>
              carouselRef?.current?.goToSlide(
                getRandomPhoto(4, carouselRef?.current.state.currentSlide)
              )
            }
          >
            {categories[4]}
          </Button>
          <Button
            onClick={() =>
              carouselRef?.current?.goToSlide(
                getRandomPhoto(5, carouselRef?.current.state.currentSlide)
              )
            }
          >
            {categories[5]}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
