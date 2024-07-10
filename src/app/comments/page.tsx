import prisma from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

export default async function page() {
  const comments = await prisma.comment.findMany();

  return (
    <div className='bg-header-bg h-screen w-full flex flex-col gap-12 justify-center items-center px-32'>
      <p className='text-2xl font-semibold'>All Comments ({comments.length})</p>
      <ul className='grid gap-5 grid-cols-3'>
        {comments.map((comment) => {
          return (
            <li
              key={comment.id}
              className='flex flex-col p-5 gap-3 border-2 rounded-md'
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
                    {comment.author}
                  </h5>
                  <p className='text-sm'>${comment.revenue}k in revenue</p>
                </div>
              </div>
              <p className='line-clamp-3'>{comment.content}</p>
              <Link
                href={`comments/${comment.author.replaceAll(' ', '-')}`}
                className='font-bold text-primary border-2 py-3 flex items-center justify-center'
              >
                {`View ${comment.author.split(' ')[0]}'s Portfolio`}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

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
