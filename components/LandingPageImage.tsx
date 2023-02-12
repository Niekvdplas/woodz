import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../lib/sanity-client";
import { image } from "../typings";

const MainHeroImage = ({ img }: any) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: image): string {
    return builder.image(source).toString();
  }
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        src={urlFor(img)}
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      />
    </div>
  );
};

export default MainHeroImage;
