import Image from 'next/image';
import Button from '../ui/button';
import { Inter } from 'next/font/google';
import Stars from '../icons/stars';
import Link from 'next/link';
import Check from '../icons/check';
import Nav from './nav';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

export default function Header() {
  return (
    <header className={`${inter.className} bg-header-bg w-full`}>
      <section className='w-full min-h-screen pb-10 lg:pb-0 px-[5%] mx-auto max-w-7xl'>
        <Nav />
        <section className='grid grid-cols-2'>
          <div className='flex flex-col justify-center lg:h-[calc(100vh_-_120px)] w-full gap-4 lg:col-span-1 col-span-2'>
            <div className='flex sm:flex-row flex-col items-center gap-4'>
              <Stars />
              <p className='pt-0.5'>Rated 4.8/5 (243 reviews)</p>
            </div>
            <h1 className='text-5xl font-bold leading-[1.2]'>
              Create Your Portfolio in Minutes.
            </h1>
            <p>
              With Fiber, you can setup your own personal portfolio in minutes
              with dozens of premade,beautiful templates
            </p>
            <div className='flex sm:flex-row py-5 sm:py-0 flex-col items-center gap-8'>
              <Button blue bg>
                Start Free Trial
              </Button>
              <Link
                className='font-bold underline underline-offset-4 text-primary'
                href={'/'}
              >
                View Examples
              </Link>
            </div>
            <div className='flex items-center gap-5'>
              <div className='flex items-center gap-2'>
                <Check />
                <p>No Credit Card Required</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check />
                <p>10 Free Templates</p>
              </div>
            </div>
          </div>
          {/* hero Illustration*/}
          <div className='flex items-center lg:justify-end justify-center w-full h-full lg:col-span-1 col-span-2'>
            <Image
              alt='hero'
              src={'/assets/hero-Illustration.png'}
              width={500}
              height={500}
              className='object-contain'
            />
          </div>
        </section>
      </section>
    </header>
  );
}
