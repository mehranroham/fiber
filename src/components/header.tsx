import Image from 'next/image';
import Button from './button';
import { Inter } from 'next/font/google';
import Stars from './stars';
import Link from 'next/link';
import Check from './check';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

export default function Header() {
  const menu = ['Community', 'Pricing', 'Features'];

  return (
    <header className={`${inter.className} bg-header-bg w-full`}>
      <section className='w-full h-screen px-[5%] mx-auto max-w-7xl'>
        <nav className='grid grid-cols-3 items-center h-[120px]'>
          {/* logo */}
          <span className='font-bold text-left text-lg'>Fiber</span>
          {/* Menu list */}
          <ul className=' flex items-center justify-center gap-5'>
            {menu.map((item) => {
              return (
                <li className='cursor-pointer' key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className='flex items-center gap-5 justify-end'>
            <Button blue={false} bg={false}>
              Sign In
            </Button>
            <Button blue bg={true}>
              Sign Up
            </Button>
          </div>
        </nav>
        <section className='grid grid-cols-2'>
          <div className='flex flex-col justify-center h-[calc(100vh_-_120px)] w-full gap-4'>
            <div className='flex items-center gap-4'>
              <Stars />
              <p className='pt-0.5'>Rated 4.8/5 (243 reviews)</p>
            </div>
            <h1 className='text-5xl font-bold leading-[1.2]'>
              Create Youre Portfolio in Minutes.
            </h1>
            <p>
              With Fiber, you can setup your own personal portfolio in minutes
              with dozens of premade,beautiful templates
            </p>
            <div className='flex items-center gap-8'>
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
          <div className='flex items-center justify-end relative w-full h-full'>
            <Image
              alt='hero'
              src={'/assets/hero-Illustration.png'}
              fill
              className='object-contain'
            />
          </div>
        </section>
      </section>
    </header>
  );
}
