import Image from 'next/image';

export default function Stars() {
  const count = Array.from({ length: 5 });

  return (
    <div className='flex items-center gap-1'>
      {count.map((item, index) => {
        return (
          <Image
            key={index}
            src={'/assets/star.svg'}
            alt='star'
            width={17}
            height={17}
          />
        );
      })}
    </div>
  );
}
