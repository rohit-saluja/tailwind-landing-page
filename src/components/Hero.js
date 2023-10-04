import { BsFillRocketTakeoffFill } from 'react-icons/bs';

function Hero() {
  return (
    <div className='container mx-auto px-28'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='pt-48'>
          <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-300 p-1 text-blue-500'>
            <BsFillRocketTakeoffFill className='text-xl' />
          </div>
          <div className='mb-6 pr-16 text-5xl/snug font-semibold text-slate-800'>
            Manage Your Activity With <span className='text-blue-600'>Appexy</span>
          </div>
          <div className='mb-8 text-slate-500'>
            Maecenas tempus, tellus eget condimentum rhoncus quam semper libero sit amet adipiscing
            sem neque sed ipsum nam quam nunc blandit vel luctus pulvinar.
          </div>
          <div className='flex gap-2'>
            <button className='rounded-sm bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-400 px-4 py-3 text-white'>
              Get Started Today
            </button>
            <button className='rounded-sm border-2 border-black px-4 py-3 text-slate-500'>
              Download App
            </button>
          </div>
        </div>
        <img src='hero-mobile-image.png' alt='' className='mx-auto md:h-[700px]' />
      </div>
    </div>
  );
}

export default Hero;
