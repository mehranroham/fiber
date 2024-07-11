import Footer from '@/components/templates/footer';
import Nav from '@/components/templates/nav';
import Button from '@/components/ui/button';
import prisma from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

export default async function page() {
  const comments = await prisma.comment.findMany({
    include: { auther: true },
  });

  return (
    <div className='bg-header-bg h-screen w-full'>
      <div className='max-w-7xl mx-auto flex flex-col gap-12 items-center px-[5%] mb-20'>
        <Nav />
        <h2 className='text-2xl font-semibold mb-10'>
          All Comments ({comments.length})
        </h2>
        <ul className='grid gap-5 grid-cols-3'>
          {comments.map((comment) => {
            return (
              <li
                key={comment.id}
                className='flex flex-col p-5 gap-5 border-2 rounded-md'
              >
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
                    <p className='text-sm'>${comment.revenue}k in revenue</p>
                  </div>
                </div>
                <p className='line-clamp-3'>{comment.content}</p>
                <Link
                  className='flex items-center justify-center border-2 border-border py-2 rounded-md'
                  href={`comments/${comment.id}`}
                >
                  Details Page
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
