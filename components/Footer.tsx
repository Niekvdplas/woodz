import React from 'react';

import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { image } from '../typings';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '../lib/sanity-client';


type Props = {
  info: {
    email: string,
    telefoon: string
  },
  logo: image
}

const Footer = ({info, logo} : Props) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: image): string {
    return builder.image(source).toString();
  }
  return (
    <div
      id="contact"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 pt-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={urlFor(logo)} alt="Woodz" className="w-50 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          <a
            href={`http://maps.google.com/?q=Woodz Kozijnen B.V.`}
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
                <span>&nbsp;Adres</span>
              </div>
              Maessloot 8, 2231 PX, Rijnsburg
            </div>
          </a>
          <a href={`tel:${info.telefoon}`}>
            <div className="leading-4 text-gray-800">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '5px',
                }}
              >
                <PhoneIcon className="w-5 h-5"></PhoneIcon>

                <span>&nbsp;Telefoon</span>
              </div>
              {info.telefoon}
            </div>
          </a>
          <a href={`mailto:${info.email}?subject=Contact via website: `}>
            <div className="leading-4 text-gray-800">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '5px',
                }}
              >
                <EnvelopeIcon className="w-5 h-5"></EnvelopeIcon>
                <span>&nbsp;Email</span>
              </div>
              {info.email}
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
