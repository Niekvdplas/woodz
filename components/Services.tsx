"use client";
import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { client } from "../lib/sanity-client";
import imageUrlBuilder from "@sanity/image-url";
import Divider from "./Divider";
import { image } from "../typings";

type Props = {
  info: [image];
};

const Services = ({ info }: Props) => {
  const [isActive, setIsActive] = useState(info[0].category);
  const [description, setDescription] = useState(info[0].caption);
  const builder = imageUrlBuilder(client);

  function urlFor(source: image): string {
    return builder.image(source).toString();
  }

  return (
    <section className={`bg-background py-8`} id="diensten">
      <div className={`container  mx-auto m-2`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {"Wat wij voor u kunnen betekenen".split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-col md:flex-row px-4`}>
          <div className="flex flex-col w-full mb-2 justify-between">
            <div>
              <div
                className={`w-full text-5xl font-bold leading-tight text-center ${
                  isActive === "Deuren" ? `text-primary` : `text-black`
                }`}
              >
                Deuren
              </div>
            </div>
            <div>
              {(isActive == "Deuren" || isActive == "Ramen") &&
                description !== "" && (
                  <div className="flex flex-1 text-center text-2xl text-stone-600 font-semibold justify-center">
                    {description}
                  </div>
                )}
            </div>
            <div>
              <div
                className={`w-full text-5xl font-bold leading-tight text-center ${
                  isActive === "Ramen" ? `text-primary` : `text-black`
                }`}
              >
                Ramen
              </div>
            </div>
          </div>
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            dynamicHeight={true}
            showStatus={false}
            showIndicators={false}
            onChange={(index) => {
              setDescription(info[index]?.caption!);
              setIsActive(info[index]?.category!);
            }}
            className="w-full items-center mx-auto"
          >
            {info.map((item: image) => (
              <div key={item._key}>
                <img src={urlFor(item)} />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-col w-full mb-2 justify-between">
            <div>
              <div
                className={`w-full text-5xl font-bold leading-tight text-center ${
                  isActive === "Kozijnen" ? `text-primary` : `text-black`
                }`}
              >
                Kozijnen
              </div>
            </div>
            <div>
              {isActive == "Kozijnen" &&
                description !== "" && (
                  <div className="flex flex-1 text-center text-2xl text-stone-600 font-semibold justify-center">
                    {description}
                  </div>
                )}
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
