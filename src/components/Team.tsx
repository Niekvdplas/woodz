import React from 'react';

import config from '../config/index.json';

const Team = () => {
  const { pricing } = config;
  const { team, title } = pricing;

  return (
    <section className={`bg-background pt-8`} id="team">
      <div className={`container mx-auto px-2 pt-4 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-wrap lg:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          {team.map((object, i) => (
            <div
              className="w-full md:w-6/12 lg:w-6/12 mb-6 px-6 sm:px-6 lg:px-4 xl:w-2/12"
              key={i}
            >
              <div className="flex flex-col">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src={object.photo}
                  alt="..."
                />
                <div className="text-center mt-6">
                  <h1 className="text-gray-900 text-xl font-bold mb-1">
                    {object.name}
                  </h1>

                  <div className="text-gray-700 font-light mb-2">
                    {object.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
