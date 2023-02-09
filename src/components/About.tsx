import React from "react";
import { PortableText } from "@portabletext/react";

const components = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <>
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {children}
        </dl>
      </>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <dt>
        <div className={`absolute flex items-center justify-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
          {children}
        </p>
      </dt>
    ),

    // Ex. 2: rendering custom list items
  },
};

const About = ({ info }: any) => {
  console.log(info);
  return (
    <div className={`py-12 bg-background`} id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`mt-2 text-3xl leading-8 text-primary font-semibold tracking-tight uppercase sm:text-4xl`}
          >
            Over ons
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            <PortableText value={info.aboutus} components={components} /> 
          </p>
          <br />
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Waarom zou u voor ons kiezen?
          </p>

        </div>

        <div className="mt-10">
        <PortableText value={info.waarom} components={components} />
        </div>
      </div>
    </div>
  );
};

export default About;
