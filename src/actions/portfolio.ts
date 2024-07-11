'use server';

import prisma from '@/lib/db';
import { cookies } from 'next/headers';
import * as jose from 'jose';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function PortfolioAction(formData: FormData) {
  // login user data
  const cookie = cookies().get('authorization');

  let user = undefined;

  if (cookie) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const jwt = cookie.value;

    const { payload } = await jose.jwtVerify(jwt, secret, {});
    user = await prisma.user.findFirst({ where: { id: payload.sub } });
  }

  // getting the data
  let revenue = formData.get('revenue') as string | number;
  const content = formData.get('content') as string;
  //   const avatar = formData.get('avatar') as string;
  revenue = Number(revenue);

  console.log({ revenue, content, user });

  await prisma.comment.create({
    data: {
      content,
      revenue,
      auther: { connect: { email: user?.email } },
    },
  });

  revalidatePath('/');
  redirect('/');
}
