import Image from 'next/image';

export default function Check() {
  return (
    <>
      <Image
        src={'/assets/Checkmark.svg'}
        alt='Checkmark'
        width={20}
        height={20}
      />
    </>
  );
}
