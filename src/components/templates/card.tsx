export default function Card({
  children,
  title,
  content,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  content: string;
}>) {
  return (
    <div className='flex flex-col gap-3'>
      {children}
      <h3 className='font-semibold'>{title}</h3>
      <p className='text-content'>{content}</p>
    </div>
  );
}
