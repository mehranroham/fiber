import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <div className='w-full h-screen grid grid-cols-5 max-w-7xl mx-auto border-r-2 shadow-lg font-Poppins-Medium'>
      <ul className='col-span-1 bg-primary flex items-center flex-col py-10 gap-7 text-white'>
        <li className='flex flex-col gap-3 items-center mb-5'>
          <span className='text-lg'>Welcome Mehran...</span>
          <Image
            src={'/assets/User-Avatar-2.svg'}
            alt='User-Avatar'
            width={100}
            height={100}
          />
        </li>

        <li>
          <Link className='text-xl' href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className='text-xl' href={'/comments'}>
            All Comments
          </Link>
        </li>
        <li>
          <Link
            className='text-xl underline underline-offset-8'
            href={'/profile'}
          >
            Create Comment
          </Link>
        </li>
      </ul>
      <div className='col-span-4 bg-header-bg flex items-center justify-center'>
        <form id='form' className='flex flex-col gap-5 w-[50%]'>
          <Input id='revenue' type='number' placeholder='Example: 100'>
            revenue
          </Input>
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
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
