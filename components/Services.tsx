"use client"
import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { client } from '../lib/sanity-client';
import imageUrlBuilder from '@sanity/image-url'
import Divider from './Divider';
import { image } from '../typings';


type Props = {
  info : [image]
}

const Services = ({info} : Props) => {
  const builder = imageUrlBuilder(client)

function urlFor(source : image) :string {
  return builder.image(source).toString()
}  
return (
    <section className={`bg-background py-8`} id="diensten">
      <div className={`container max-w-5xl mx-auto m-2`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {"Wat wij voor u kunnen betekenen".split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex px-4 md:w-96 items-center mx-auto`}>
        <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        >
          {info.map((item : image) => (
              <div>
                <img src={urlFor(item)} />
                <p className="legend">{item.caption}</p>
            </div>
          ))}
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
