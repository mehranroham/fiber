'use client';

import { useFormStatus } from 'react-dom';

export default function Button({
  children,
  bg,
  blue,
}: Readonly<{
  children: React.ReactNode;
  bg: boolean;
  blue: boolean;
}>) {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        className={`${
          blue && bg
            ? 'bg-primary text-white '
            : !blue && bg
            ? 'bg-white text-primary'
            : 'bg-none'
        } font-bold py-3.5 px-6 rounded-md transition-colors duration-300 hover:bg-content hover:text-white`}
      >
        {pending ? 'Pending...' : children}
      </button>
    </>
  );
}
