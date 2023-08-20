import React from 'react';
import HeaderWidget from '../common/HeaderWidget';
import { solutionsData } from '~/shared/data';
import Image from 'next/image';

const Solutions = () => {
  const { header, solutions } = solutionsData;
  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="solution">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}
        <div className="flex items-stretch justify-center">
          <div className="grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {solutions.map(({ title, description, order }, index) => (
              <div
                key={`item-solution-${index}`}
                className="col-span-3 flex sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
              >
                <div className="flex-flow card flex border-b-[3px] border-transparent text-center hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
                  <div key={`item-solution-${index}`} className="card-body">
                    <div className="flex">
                      <div>
                        <h3 className="mb-3 text-left font-semibold">{title}</h3>
                        {description && (
                          <p className="m-b-30 text-left font-light dark:text-slate-400">{`${description.slice(
                            0,
                            150,
                          )}...`}</p>
                        )}
                      </div>
                      <div>
                        <span className="text-8xl">{order}</span>
                        {/* {image && (
                          <Image
                            src={image.src}
                            width={48}
                            height={48}
                            alt={image.alt}
                            className="mr-4 h-auto w-24 object-contain shadow-lg"
                          />
                        )} */}
                      </div>
                    </div>

                    {/* <div className="mb-4 flex">
                      {image && (
                        <Image
                          src={image.src}
                          width={48}
                          height={48}
                          alt={image.alt}
                          className="mr-4 h-12 w-12 rounded-full object-cover shadow-lg"
                        />
                      )}
                      <div className="text-left"></div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
