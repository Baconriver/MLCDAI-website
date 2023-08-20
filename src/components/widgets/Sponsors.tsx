import React from 'react';
import { SponsorsProps } from '~/shared/types';
import Image from 'next/image';

const Sponsors = ({ images }: SponsorsProps) => {
  return (
    <section className="bg-primary-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl  px-4 py-16  sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-heading mb-6 text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white md:mb-12 md:text-4xl">
          Sponsors
        </h2>
        <div className="flex items-center justify-center gap-9 md:gap-20">
          {images &&
            images.map(({ src, alt, link }, index) => (
              <div key={`item-social-proof-${index}`}>
                <a href={link} target="_blank" rel="noopener">
                  <Image
                    src={src}
                    alt={alt}
                    className="h-auto w-16 md:w-36"
                    object-fit="contain"
                    width={640}
                    height={640}
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
