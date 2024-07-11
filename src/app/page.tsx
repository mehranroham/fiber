import Button from '@/components/ui/button';
import Card from '@/components/templates/card';
import Footer from '@/components/templates/footer';
import Header from '@/components/templates/header';
import Slider from '@/components/slider/comments-slider';
import Image from 'next/image';
import prisma from '@/lib/db';

export default async function Home() {
  const comments = await prisma.comment.findMany({
    include: { auther: true },
    orderBy: { createdAt: 'desc' },
  });

  const cards = [
    {
      title: 'Build in minutes',
      content:
        'With a selection of premade templates, you can build out a portfolio in less than 10 minutes.',
      src: '/assets/time.svg',
    },
    {
      title: 'Add custom CSS',
      content:
        'Customize your personal portfolio even more with the ability to add your own custom CSS styles.',
      src: '/assets/code.svg',
    },
    {
      title: 'Responsive',
      content:
        'All Fiber templates are fully responsive to ensure the experience is seemless across all devices.',
      src: '/assets/allSizes.svg',
    },
  ];

  return (
    <>
      <Header />
      <main className='px-[5%] mx-auto max-w-7xl'>
        <section className='pt-20 flex flex-col gap-3'>
          <h2 className='font-semibold text-primary'>Why Fiber?</h2>
          <p className='text-4xl font-bold leading-[1.2]'>
            A good portfolio means good <br /> employability.
          </p>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-16 mt-7'>
            {cards.map((card) => {
              return (
                <Card
                  key={card.title}
                  title={card.title}
                  content={card.content}
                >
                  <Image
                    alt={card.title}
                    src={card.src}
                    height={30}
                    width={30}
                  />
                </Card>
              );
            })}
          </div>
          <div className='w-full relative rounded-lg bg-primary h-[450px] my-12 grid grid-cols-2'>
            <div className='flex flex-col justify-center gap-5 text-white items-start px-10 lg:col-span-1 col-span-2'>
              <h4 className='font-bold text-4xl'>Diversify your portfolio.</h4>
              <p className='text-[#DBD0F9]'>
                Create an even more impressive portfolio by creating case
                studies for your projects. Simply follow our step-by-step guide.
              </p>
              <Button bg blue={false}>
                Start Free Trial
              </Button>
            </div>
            <div className='relative w-[90%] ml-auto h-[90%] mt-auto mr-14 lg:block hidden'>
              <Image
                alt='Page-Image'
                src={'/assets/Page-Image.png'}
                fill
                className='object-cover'
              />
            </div>
          </div>
        </section>
      </main>
      <Slider comments={comments} />
      <Footer />
    </>
  );
}
