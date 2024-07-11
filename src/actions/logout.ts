'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const logOutAction = () => {
  cookies().delete('authorization');

  redirect('/auth/sign-in');
};
