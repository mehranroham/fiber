'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import '@/app/globals.css';

export default function SingleSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='w-[70%] h-full flex flex-col gap-5 items-center justify-center mx-auto'>
            <Image
              src={'/assets/Sign-Up-Image.png'}
              alt='Sign-Up-Image'
              width={500}
              height={500}
            />
            <h4 className='font-bold text-3xl px-[10%]'>
              Unparalleled Templates
            </h4>
            <p className='font-light text-center px-[10%]'>
              Crafted by a team of professional designers, our templates are
              eunparalleled in the market.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[70%] h-full flex flex-col gap-5 items-center justify-center mx-auto'>
            <Image
              src={'/assets/Sign-Up-Image.png'}
              alt='Sign-Up-Image'
              width={500}
              height={500}
            />
            <h4 className='font-bold text-3xl px-[10%]'>
              Unparalleled Templates
            </h4>
            <p className='font-light text-center px-[10%]'>
              Crafted by a team of professional designers, our templates are
              eunparalleled in the market.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[70%] h-full flex flex-col gap-5 items-center justify-center mx-auto'>
            <Image
              src={'/assets/Sign-Up-Image.png'}
              alt='Sign-Up-Image'
              width={500}
              height={500}
            />
            <h4 className='font-bold text-3xl px-[10%]'>
              Unparalleled Templates
            </h4>
            <p className='font-light text-center px-[10%]'>
              Crafted by a team of professional designers, our templates are
              eunparalleled in the market.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[70%] h-full flex flex-col gap-5 items-center justify-center mx-auto'>
            <Image
              src={'/assets/Sign-Up-Image.png'}
              alt='Sign-Up-Image'
              width={500}
              height={500}
            />
            <h4 className='font-bold text-3xl px-[10%]'>
              Unparalleled Templates
            </h4>
            <p className='font-light text-center px-[10%]'>
              Crafted by a team of professional designers, our templates are
              eunparalleled in the market.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
