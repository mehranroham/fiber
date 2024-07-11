'use client';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import PassInput from '@/components/ui/pass-input';
import SingleSlider from '@/components/slider/signup-slider';
import type { Metadata } from 'next';
import { SigninAction } from '@/actions/signin';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};

export default function Page() {
  const [state, formAction] = useFormState(SigninAction, initialState);

  return (
    <div className=' w-full h-screen'>
      <div className='grid grid-cols-2 w-full h-screen mx-auto max-w-7xl shadow-xl'>
        <div className='w-full h-screen bg-primary text-white flex justify-center items-center'>
          <SingleSlider />
        </div>
        <div className='w-full h-screen bg-white flex justify-center border-l '>
          <div className='w-[65%] h-full bg-white flex flex-col justify-center gap-7'>
            <h3 className='font-bold'>Fiber</h3>
            <p className='font-bold text-3xl'>Login to your Fiber account</p>
            <form id='form' action={formAction} className='flex flex-col gap-5'>
              {state?.message !== '' && (
                <p className='text-red-600'>* {state?.message}</p>
              )}
              <Input id='email' type='email' placeholder='John@Example.xom'>
                E-Mail
              </Input>
              <PassInput placeholder='At Least 8 characters'>
                Password
              </PassInput>

              <Button bg blue>
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
