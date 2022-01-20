import React from 'react';

import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline';

import config from '../config/index.json';

const Aboutd = () => {
  const { company, aboutd } = config;
  const { logo, name: companyName } = company;
  const { sections } = aboutd;
  const [firstSection, secondSection, thirdSection] = sections;

  return (
    <div
      id="aboutd"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-50 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          <div className="text-primary leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <LocationMarkerIcon className="w-5 h-5"></LocationMarkerIcon>
              <span>{firstSection?.name}</span>
            </div>
            {firstSection?.href}
          </div>
          <div className="text-primary leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PhoneIcon className="w-5 h-5"></PhoneIcon>
              <span>{secondSection?.name}</span>
            </div>
            {secondSection?.href}
          </div>
          <div className="text-primary leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MailIcon className="w-5 h-5"></MailIcon>
              <span>{thirdSection?.name}</span>
            </div>
            {thirdSection?.href}
          </div>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by Niek van der Plas
          </p>
        </div>
      </div>
    </div>
  );
};
export default Aboutd;
