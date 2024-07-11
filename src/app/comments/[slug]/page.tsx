import prisma from '@/lib/db';
import { redirect } from 'next/navigation';

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await prisma.comment.findUnique({
    where: { author: slug.replaceAll('-', ' ') },
  });

  if (!post) {
    redirect('/');
  }

  return <div>{post?.author}</div>;
}
