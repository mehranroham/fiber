import Footer from '@/components/templates/footer';
import Nav from '@/components/templates/nav';
import prisma from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

export default async function page() {
  const users = await prisma.user.findMany();

  return (
    // <div className='bg-header-bg h-screen w-full'>
    //   <div className='max-w-7xl mx-auto flex flex-col gap-12 items-center px-[5%] mb-20'>
    //     <Nav />
    //     <h2 className='text-2xl font-semibold mb-10'>
    //       All Comments ({users.length})
    //     </h2>
    //     <ul className='grid gap-5 grid-cols-3'>
    //       {users.map((user) => {
    //         return (
    //           <li
    //             key={user.id}
    //             className='flex flex-col p-5 gap-3 border-2 rounded-md'
    //           >
    //             <div className='flex items-center gap-3'>
    //               {/* <Image
    //                 alt='Avatar'
    //                 src={user.}
    //                 width={50}
    //                 height={50}
    //               /> */}
    //               <div className='flex flex-col'>
    //                 <h5 className='text-sm font-bold text-primary'>
    //                   {user.name}
    //                 </h5>
    //                 <p className='text-sm'>${user.email}k in revenue</p>
    //               </div>
    //             </div>
    //             <p className='line-clamp-3'>{user.password}</p>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    //   <hr />
    //   <Footer />
    // </div>
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}
