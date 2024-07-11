'use server';

import validateEmail from '@/helpers/validateEmail';
import validatePassword from '@/helpers/validatePassword';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function SigninAction(prevState: any, formData: FormData) {
  // getting the data
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  //   // validate data
  if (!validateEmail(email)) {
    return {
      message: 'Please enter a valid Email',
    };
  }

  if (!validatePassword(password)) {
    return {
      message: 'Please enter a valid Password, at least 8 characters',
    };
  }

  // look for the user
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    return {
      message: 'Please enter a valid Email',
    };
  }

  // compare the hashed password
  const isCorrectPass = bcrypt.compareSync(password, user.password);

  if (!isCorrectPass) {
    return {
      message: 'Please enter a valid Password, at least 8 characters',
    };
  }

  // create jwt token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = 'HS256';

  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setExpirationTime('72h')
    .setSubject(user.id)
    .sign(secret);

  cookies().set('authorization', jwt, {
    httpOnly: true,
    secure: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3, // 3 days
    path: '/',
    sameSite: 'strict',
  });
  redirect('/');
}
