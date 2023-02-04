import React from 'react';

import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

import config from '../config/index.json';

const Footer = () => {
  const { company, contactinfo } = config;
  const { logo, name: companyName } = company;
  const { sections } = contactinfo;
  const [firstSection, secondSection, thirdSection] = sections;

  return (
    <div
      id="contact"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 pt-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-50 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          <a
            href={`http://maps.google.com/?q=${firstSection?.href}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="leading-4 text-gray-800">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '5px',
                }}
              >
                <MapPinIcon className="w-5 h-5"></MapPinIcon>
                <span>&nbsp;{firstSection?.name}</span>
              </div>
              {firstSection?.location}
            </div>
          </a>
          <a href={`tel:${secondSection?.href}`}>
            <div className="leading-4 text-gray-800">
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
          <a href={`mailto:${thirdSection?.href}`}>
            <div className="leading-4 text-gray-800">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '5px',
                }}
              >
                <EnvelopeIcon className="w-5 h-5"></EnvelopeIcon>
                <span>&nbsp;{thirdSection?.name}</span>
              </div>
              {thirdSection?.href}
            </div>
          </a>
        </div>
        <div className="flex items-center mt-12 mb-1">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900">
            &copy; {new Date().getFullYear()} designed by Niek van der Plas
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
