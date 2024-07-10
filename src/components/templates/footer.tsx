import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

export default function Footer() {
  return (
    <footer className={`${inter.className} bg-header-bg w-full `}>
      <div className='w-full py-12 px-[5%] mx-auto max-w-7xl grid grid-cols-6 text-content'>
        <div className='col-span-2 flex flex-col gap-3'>
          <h5 className='font-bold text-black'>Fiber</h5>
          <p>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <p className='mt-3'>Made with ❤️ by Mehran Roham.</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h5 className='font-bold text-black'>Sitemap</h5>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer'>Homepage</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Testimonials</li>
            <li className='cursor-pointer'>Features</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <h5 className='font-bold text-black'>Resources</h5>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer'>Support</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>FAQ</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <h5 className='font-bold text-black'>Company</h5>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Customers</li>
            <li className='cursor-pointer'>Blog</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <h5 className='font-bold text-black'>Portfolios</h5>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer'>Sarah Andrews</li>
            <li className='cursor-pointer'>Mathew Higgins</li>
            <li className='cursor-pointer'>Janice Dave</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
