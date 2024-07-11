import Link from 'next/link';
import React from 'react';
import Button from '../ui/button';

export default function Nav() {
  const menu = [
    { name: 'Community', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Comments', href: '/comments' },
  ];

  return (
    <nav className='grid grid-cols-3 items-center h-[120px] w-full '>
      {/* logo */}
      <Link href={'/'} className='font-bold text-left text-lg cursor-pointer'>
        Fiber
      </Link>
      {/* Menu list */}
      <ul className=' flex items-center justify-center gap-5'>
        {menu.map((item) => {
          return (
            <li className='cursor-pointer' key={item.name}>
              <Link href={item.href}> {item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className='flex items-center gap-5 justify-end'>
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
      </div>
    </nav>
  );
}
