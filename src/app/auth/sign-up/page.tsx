import Button from '@/components/button';
import Input from '@/components/input';
import PassInput from '@/components/pass-input';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fiber SignUp Page',
  description: 'SignUp in Fiber',
};

export default function page() {
  async function getData(formData: FormData) {
    'use server';

    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      checkbox: formData.get('checkbox'),
      password: formData.get('password'),
    };

    console.log(rawFormData);
  }

  return (
    <div className='bg-black w-full h-screen'>
      <div className='grid grid-cols-2 w-full h-screen mx-auto max-w-7xl'>
        <div className='w-full h-screen bg-white flex justify-center'>
          <div className='w-[65%] h-full bg-white flex flex-col justify-center gap-7'>
            <h3 className='font-bold'>Fiber</h3>
            <p className='font-bold text-3xl'>Create your Fiber account</p>
            <form id='form' action={getData} className='flex flex-col gap-5'>
              <Input id='name' type='text' placeholder='John Doe'>
                Your Name
              </Input>
              <Input id='email' type='email' placeholder='John@Example.xom'>
                E-Mail
              </Input>
              <PassInput placeholder='At Least 8 characters'>
                Password
              </PassInput>
              <div className='flex items-start gap-3 py-2'>
                <input
                  className='scale-150 mt-1.5'
                  required
                  type='checkbox'
                  name='checkbox'
                  id='checkbox'
                />
                <label htmlFor='checkbox'>
                  By creating an account in Fiber, you agree to the
                  <span className='text-primary underline underline-offset-8 font-semibold cursor-pointer'>
                    {' '}
                    Terms & Conditions
                  </span>
                </label>
              </div>
              <Button bg blue>
                Create Fiber Account
              </Button>
            </form>
          </div>
        </div>
        <div className='w-full h-screen bg-primary text-white'>
          <div className='w-[70%] h-full flex flex-col gap-5 items-center justify-center mx-auto'>
            <Image
              src={'/assets/Sign-Up-Image.png'}
              alt='Sign-Up-Image'
              width={500}
              height={500}
            />
            <h4 className='font-bold text-3xl px-[10%]'>
              Unparalleled Templates
            </h4>
            <p className='font-light text-center px-[10%]'>
              Crafted by a team of professional designers, our templates are
              eunparalleled in the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
