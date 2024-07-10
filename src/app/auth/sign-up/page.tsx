import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import PassInput from '@/components/ui/pass-input';
import SingleSlider from '@/components/slider/signup-slider';
import type { Metadata } from 'next';

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
        <div className='w-full h-screen bg-primary text-white flex justify-center items-center'>
          <SingleSlider />
        </div>
      </div>
    </div>
  );
}
