"use client"
import React from "react";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../lib/sanity-client";

const MainHeroImage = ({ img }: any) => {
  const imageProps = useNextSanityImage(client, img);
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Img
        {...imageProps}
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      />
    </div>
  );
};

export default MainHeroImage;
