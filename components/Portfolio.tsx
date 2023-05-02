import { client } from "../lib/sanity-client";
import { image } from "../typings";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

type Props = {
  info: [image];
};

const Portfolio = ({ info: images }: Props) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: image): string {
    return builder.image(source).toString();
  }

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
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="md:columns-3 -m-1 md:-m-2">
            {images.map((im) => (
              <div className="py-2 hover:scale-105 transition-all duration-700" key={im._key}>
                <div className="w-full overflow-hidden relative bg-no-repeat bg-cover border-primary border rounded-lg">
                  <Image
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    width={1000}
                    height={1000}
                    src={urlFor(im)}
                  />
                  <div className="absolute top-0 right-0 bottom-0 rounded-lg left-0 w-full h-full overflow-hidden bg-fixed bg-blue-400/0 hover:bg-blue-400/60 transition duration-600 ease-in-out text-3xl font-bold text-white flex justify-center items-center text-opacity-0 hover:text-opacity-80 text-center px-2">
                    {im.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
