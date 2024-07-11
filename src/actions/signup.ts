'use server';

import validateEmail from '@/helpers/validateEmail';
import validatePassword from '@/helpers/validatePassword';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { Prisma } from '@prisma/client';

export async function SignupAction(prevState: any, formData: FormData) {
  // getting the data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const checkbox = formData.get('checkbox');
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

  if (!name || !checkbox) {
    return {
      message: 'Please fill all the Inputs',
    };
  }

  // hash the password
  const hash = bcrypt.hashSync(password, 8);

  // create the user
  try {
    await prisma.user.create({ data: { email, name, password: hash } });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        );
      }
    }
    return {
      message: 'This Email Already Exist',
    };
  }

  redirect('/auth/sign-in');
}
