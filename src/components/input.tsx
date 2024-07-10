export default function Input({
  children,
  id,
  placeholder,
  type,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  placeholder: string;
  type: string;
}>) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-semibold' htmlFor={id}>
        {children}
      </label>
      <input
        className='px-5 py-2.5 outline-none border-2 border-border rounded-md'
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        required
      />
    </div>
  );
}
