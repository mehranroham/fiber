'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

type Comment = {
  auther: {
    id: string;
    email: string;
    name: string;
    password: string;
  };
} & {
  id: string;
  revenue: number;
  content: string;
  updatedAt: Date;
  createdAt: Date;
  avatar: string;
  authorId: string;
};

export default function Slider({ comments }: { comments: Comment[] }) {
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
            <SwiperSlide key={comment.auther.id} className='w-full'>
              <div className='flex flex-col p-5 gap-3 border-2 rounded-md'>
                <div className='flex items-center gap-3'>
                  <Image
                    alt='Avatar'
                    src={comment.avatar}
                    width={50}
                    height={50}
                  />
                  <div className='flex flex-col'>
                    <h5 className='text-sm font-bold text-primary'>
                      {comment.auther.name}
                    </h5>
                    <p className='text-sm'>{`$${comment.revenue}k in revenue`}</p>
                  </div>
                </div>
                <p className='line-clamp-4'>{comment.content}</p>
                <button className='font-bold text-primary border-2 py-3'>
                  {`View ${comment.auther.name.split(' ')[0]}'s Portfolio`}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
