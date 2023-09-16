'use client';
import Image from 'next/image';
import { HeroProps } from '~/shared/types';
// import CTA from '../common/CTA';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../../assets/styles/mainSwiper.css';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, callToAction2, image, image2 } = props.data;
  const pagination = {
    clickable: true,
  };
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div>
          <div className="relative m-auto h-[16rem] max-w-7xl md:h-[32rem]">
            <Swiper
              pagination={pagination}
              modules={[Pagination, Autoplay, EffectFade]}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              effect={'fade'}
            >
              <SwiperSlide>
                <Image
                  src={image!.src}
                  alt={image!.alt}
                  className="mx-auto h-auto w-full bg-gray-400 dark:bg-slate-700"
                  placeholder="blur"
                  loading="eager"
                  priority
                  sizes="(max-width: 64rem) 100vw, 1024px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={image2!.src}
                  alt={image2!.alt}
                  className="mx-auto h-auto w-full bg-gray-400 dark:bg-slate-700"
                  placeholder="blur"
                  loading="eager"
                  priority
                  sizes="(max-width: 64rem) 100vw, 1024px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={image!.src}
                  alt={image!.alt}
                  className="mx-auto h-auto w-full bg-gray-400 dark:bg-slate-700"
                  placeholder="blur"
                  loading="eager"
                  priority
                  sizes="(max-width: 64rem) 100vw, 1024px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={image2!.src}
                  alt={image2!.alt}
                  className="mx-auto h-auto w-full bg-gray-400 dark:bg-slate-700"
                  placeholder="blur"
                  loading="eager"
                  priority
                  sizes="(max-width: 64rem) 100vw, 1024px"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* {image && (
            <div className="relative m-auto max-w-7xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full bg-gray-400 dark:bg-slate-700"
                placeholder="blur"
                loading="eager"
                priority
                sizes="(max-width: 64rem) 100vw, 1024px"
              />
            </div>
          )} */}
          {/* <div className="mx-auto max-w-7xl pb-10 text-center md:pb-16">
            {title && (
              <h1 className="leading-tighter font-heading my-6 ml-20 max-w-xl text-left text-4xl font-semibold tracking-tighter">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA data={callToAction} />}
                {callToAction2 && <CTA data={callToAction2} />}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
