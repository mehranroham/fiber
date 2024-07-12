import prisma from '@/lib/db';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const comment = await prisma.comment.findUnique({
    where: { id: slug },
    include: { auther: true },
  });

  if (!comment) {
    redirect('/');
  }

  return (
    <div className='w-full h-screen grid grid-cols-2 mx-auto max-w-7xl shadow-lg border-l-2'>
      <div className='w-full h-full md:col-span-1 col-span-2 bg-header-bg flex flex-col gap-12 items-center justify-center px-12'>
        <div className='flex items-center gap-3'>
          <Image alt='Avatar' src={comment.avatar} width={150} height={150} />
          <div className='flex flex-col gap-2'>
            <h3 className='text-3xl font-bold text-primary'>
              {comment.auther.name}
            </h3>
            <p className='text-lg'>${comment.revenue}k in revenue</p>
          </div>
        </div>
        <p>{comment.content}</p>
      </div>
      <div className='w-full h-full md:col-span-1 col-span-2 bg-primary flex items-center justify-center'>
        <div className='relative lg:w-[500px] w-[380px] h-[300px]'>
          <Image
            src={'/assets/Sign-Up-Image.png'}
            fill
            className='object-contain'
            alt='Sign-Up-Image'
          />
        </div>
      </div>
    </div>
  );
}
