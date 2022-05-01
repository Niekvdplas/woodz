import React from 'react';

import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline';

import config from '../config/index.json';

const Aboutd = () => {
  const { company, contactinfo } = config;
  const { logo, name: companyName } = company;
  const { sections } = contactinfo;
  const [firstSection, secondSection, thirdSection] = sections;

  return (
    <div
      id="contact"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-50 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          <a href={`http://maps.google.com/?q=term${firstSection?.href}`}>
            <div className="text-primary leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '5px',
                }}
              >
                <LocationMarkerIcon className="w-5 h-5"></LocationMarkerIcon>
                <span>&nbsp;{firstSection?.name}</span>
              </div>
              {firstSection?.href}
            </div>
          </a>
          <a href={`tel:${secondSection?.href}`}>
            <div className="text-primary leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '5px',
                }}
              >
                <PhoneIcon className="w-5 h-5"></PhoneIcon>

                <span>&nbsp;{secondSection?.name}</span>
              </div>
              {secondSection?.href}
            </div>
          </a>
          <a href="mailto:niekvanderplas1@gmail.com">
            <div className="text-primary leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '5px',
                }}
              >
                <MailIcon className="w-5 h-5"></MailIcon>
                <span>&nbsp;{thirdSection?.name}</span>
              </div>
              {thirdSection?.href}
            </div>
          </a>
        </div>
        <br />
        <br />
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
