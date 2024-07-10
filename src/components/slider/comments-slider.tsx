'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

// import required modules

export default function Slider() {
  const comments = [
    {
      name: 'Sarah Andrews',
      revenue: '$100k in revenue',
      comment:
        'Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.',
      button: "View Sarah's Portfolio",
      src: '/assets/User-Avatar-1.svg',
    },
    {
      name: 'Mathew Higgins',
      revenue: '$20k in revenue',
      comment:
        "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
      button: "View Mathew's Portfolio",
      src: '/assets/User-Avatar-2.svg',
    },
    {
      name: 'Janice Dave',
      revenue: '$20k in revenue',
      comment:
        'I only just started freelancing this year have already made more than I ever in my full-time job. The templates are so amazing.',
      button: "View Janice's Portfolio",
      src: '/assets/User-Avatar-3.svg',
    },
    {
      name: 'Janice Dave',
      revenue: '$20k in revenue',
      comment:
        'I only just started freelancing this year have already made more than I ever in my full-time job. The templates are so amazing.',
      button: "View Janice's Portfolio",
      src: '/assets/User-Avatar-3.svg',
    },
    {
      name: 'Janice Dave',
      revenue: '$20k in revenue',
      comment:
        'I only just started freelancing this year have already made more than I ever in my full-time job. The templates are so amazing.',
      button: "View Janice's Portfolio",
      src: '/assets/User-Avatar-3.svg',
    },
    {
      name: 'Janice Dave',
      revenue: '$20k in revenue',
      comment:
        'I only just started freelancing this year have already made more than I ever in my full-time job. The templates are so amazing.',
      button: "View Janice's Portfolio",
      src: '/assets/User-Avatar-3.svg',
    },
  ];

  return (
    <section className='mt-5 mb-16 cursor-pointer max-w-7xl ml-[13%]'>
      <Swiper
        slidesPerView={3.3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        className='mySwiper'
      >
        {/* <SwiperSlide></SwiperSlide> */}
        {comments.map((comment) => {
          return (
            <SwiperSlide key={comment.name} className='w-full'>
              <div className='flex flex-col p-5 gap-3 border-2 rounded-md'>
                <div className='flex items-center gap-3'>
                  <Image
                    alt='Avatar'
                    src={comment.src}
                    width={50}
                    height={50}
                  />
                  <div className='flex flex-col'>
                    <h5 className='text-sm font-bold text-primary'>
                      {comment.name}
                    </h5>
                    <p className='text-sm'>{comment.revenue}</p>
                  </div>
                </div>
                <p className='line-clamp-4'>{comment.comment}</p>
                <button className='font-bold text-primary border-2 py-3'>
                  {comment.button}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
