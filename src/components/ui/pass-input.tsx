'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PassInput({
  children,
  placeholder,
}: Readonly<{
  children: React.ReactNode;
  placeholder: string;
}>) {
  interface IshowPass {
    show: Boolean;
  }

  const [pass, setPass] = useState<IshowPass>({ show: false });

  const clickHandler = () => {
    setPass((prev) => {
      return { show: !prev.show };
    });
  };

  return (
    <div className='flex flex-col gap-2 relative'>
      <label className='font-semibold' htmlFor='password'>
        {children}
      </label>
      <input
        className='px-5 py-2.5 outline-none border-2 border-border rounded-md'
        type={pass.show ? 'text' : 'password'}
        placeholder={placeholder}
        id='password'
        name='password'
        required
      />
      <Image
        alt='hide-password'
        onClick={clickHandler}
        src={'/assets/hide-password.svg'}
        className='absolute right-5 bottom-[13px] cursor-pointer'
        width={20}
        height={20}
      />
    </div>
  );
}
