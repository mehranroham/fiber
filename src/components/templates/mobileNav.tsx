'use client';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../ui/button';
import { logOutAction } from '@/actions/logout';

export default function MobileNav({
  menu,
  cookie,
}: {
  menu: {
    name: string;
    href: string;
  }[];
  cookie: RequestCookie | undefined;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='flex justify-end lg:hidden'>
      <Image
        onClick={() => setShowMenu((prev) => !prev)}
        src={'/assets/Hamburger-Menu.svg'}
        alt='Hamburger-Menu'
        width={30}
        height={30}
      />

      <ul
        className={`fixed bg-white h-[70%] w-[65%] md:w-[40%] z-30 ${
          showMenu ? 'right-0' : 'right-[-100%]'
        } top-0 transition-all duration-1000 flex items-center justify-center flex-col gap-3 text-lg`}
      >
        <li className='mb-5'>
          <Link href={'/'}>Home</Link>
        </li>
        {menu.map((item) => {
          return (
            <li className='mb-5' key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}

        <span className='w-[80%] mx-auto h-0.5 bg-content'></span>

        {!cookie && (
          <>
            <Link href='/auth/sign-in'>
              <Button blue={false} bg={false}>
                Sign In
              </Button>
            </Link>
            <Link href='/auth/sign-up'>
              <Button blue bg={true}>
                Sign Up
              </Button>
            </Link>
          </>
        )}
        {cookie && (
          <>
            <form action={logOutAction}>
              <Button blue={false} bg={false}>
                Log Out
              </Button>
            </form>
            <Link href={'/profile'}>
              <Button blue bg={true}>
                Profile
              </Button>
            </Link>
          </>
        )}
      </ul>

      {showMenu && (
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className='fixed z-20 bg-black/95 inset-0'
        ></div>
      )}
    </div>
  );
}
