'use client';

import Image from 'next/image';

export default function MobileNav() {
  return (
    <div className='flex justify-end lg:hidden'>
      <Image
        src={'/assets/Hamburger-Menu.svg'}
        alt='Hamburger-Menu'
        width={30}
        height={30}
      />
    </div>
  );
}
