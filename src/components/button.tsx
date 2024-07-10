export default function Button({
  children,
  bg,
}: Readonly<{
  children: React.ReactNode;
  bg: boolean;
}>) {
  return (
    <>
      <button
        className={`${
          bg ? 'bg-primary text-white' : 'bg-none'
        } font-bold py-3.5 px-6 rounded-md`}
      >
        {children}
      </button>
    </>
  );
}
