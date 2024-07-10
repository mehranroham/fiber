import Button from '@/components/button';
import Card from '@/components/card';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
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
        <section className='py-20 flex flex-col gap-3'>
          <h2 className='font-semibold text-primary'>Why Fiber?</h2>
          <p className='text-4xl font-bold leading-[1.2]'>
            A good portfolio means good <br /> employability.
          </p>
          <div className='grid grid-cols-3 gap-16 mt-7'>
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
          <div className='w-full relative rounded-lg bg-primary h-[450px] my-12 flex flex-col justify-center gap-4 text-white items-start px-10'>
            <Image
              alt='Page-Image'
              src={'/assets/Page-Image.png'}
              width={550}
              height={550}
              className='absolute bottom-0 right-10 object-cover'
            />
            <h4 className='font-bold text-4xl'>Diversify your portfolio.</h4>
            <p className='w-[40%] text-[#DBD0F9]'>
              Create an even more impressive portfolio by creating case studies
              for your projects. Simply follow our step-by-step guide.
            </p>
            <Button bg blue={false}>
              Start Free Trial
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
