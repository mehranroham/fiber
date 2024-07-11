import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import prisma from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { logOutAction } from '@/actions/logout';
import { PortfolioAction } from '@/actions/portfolio';

export default async function page() {
  const cookie = cookies().get('authorization');

  let user = undefined;

  if (cookie) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const jwt = cookie.value;

    const { payload } = await jose.jwtVerify(jwt, secret, {});
    user = await prisma.user.findFirst({
      where: { id: payload.sub },
      include: { comments: true },
    });
  }

  return (
    <div className='w-full h-screen grid grid-cols-6 border-r-2 shadow-lg font-Poppins-Medium'>
      <ul className='lg:col-span-1 sm:col-span-2 col-span-6 bg-primary flex items-center flex-col py-10 gap-7 text-white'>
        <div className='flex flex-col gap-5 items-center justify-between mb-5'>
          <Image
            src={'/assets/avatar.png'}
            alt='User-Avatar'
            width={100}
            height={100}
          />
        </div>
        <li>
          <Link className='text-lg' href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className='text-lg' href={'/comments'}>
            All Comments
          </Link>
        </li>
        <li>
          <Link
            className='text-lg underline underline-offset-8 flex justify-center items-center text-center'
            href={'/profile'}
          >
            Create Comment
          </Link>
        </li>
        <form className='mt-10' action={logOutAction}>
          <Button blue={false} bg>
            Log Out
          </Button>
        </form>
      </ul>

      <div className='lg:col-span-5 sm:col-span-4 col-span-6 bg-header-bg grid grid-cols-2 gap-x-5 px-10'>
        <div className='w-full py-14 flex flex-col gap-5 col-span-2 lg:col-span-1'>
          <div className='flex flex-col gap-5 mb-10'>
            <h3 className='font-Poppins-Bold text-center text-lg border-b-2 pb-1.5'>
              User Info
            </h3>
            <p className='font-Poppins-Bold text-lg'>Welcome {user?.name}</p>
            <p>{user?.email}</p>
          </div>
          <form
            action={PortfolioAction}
            id='form'
            className='flex flex-col gap-5'
          >
            <h3 className='font-Poppins-Bold text-center text-lg border-b-2 pb-1.5'>
              Comment Form
            </h3>
            <Input id='revenue' type='number' placeholder='Example: 100k'>
              Revenue
            </Input>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor='avatar'>
                Avatar URL(this is optional)
              </label>
              <input
                className='px-5 py-2.5 outline-none border-2 border-border rounded-md'
                type='text'
                defaultValue={'/assets/avatar.png'}
                id='avatar'
                name='avatar'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor='content'>
                Comment
              </label>
              <textarea
                className='px-5 py-2.5 outline-none border-2 border-border rounded-md min-h-28'
                placeholder='Your Comment'
                id='content'
                name='content'
                required
              />
            </div>
            <Button bg blue>
              Publish
            </Button>
          </form>
        </div>
        <ul className='lg:mt-10 flex flex-col gap-5 col-span-2 lg:col-span-1 mb-12'>
          <h3 className='font-Poppins-Bold text-center text-lg border-b-2 pb-1.5'>
            Your Comments
          </h3>
          {user?.comments.map((comment) => {
            return (
              <li
                className='border-2 border-border bg-white flex flex-col items-center py-5 rounded-md'
                key={comment.id}
              >
                <p>{comment.revenue}</p>
                <p>{comment.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
