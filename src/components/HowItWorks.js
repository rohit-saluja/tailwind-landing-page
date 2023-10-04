import { AiOutlineBars } from 'react-icons/ai';
import { VscSymbolColor } from 'react-icons/vsc';
import { GrStackOverflow } from 'react-icons/gr';

function HowItWorks() {
  return (
    <div className='container mx-28'>
      <div className='mx-auto mb-12 max-w-md text-center leading-8'>
        <h1 className='font-thin uppercase text-slate-950'>
          how it <span className='font-semibold'>work</span>
        </h1>
        <h2 className='text-2xl font-bold'>How dose it work ?</h2>
        <p className='text-slate-500'>
          Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem
          aperiam.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='flex flex-col items-center justify-center'>
          <span className='flex h-28 w-28 items-center justify-center rounded-full bg-blue-200'>
            <AiOutlineBars className='text-3xl' />
          </span>
          <p className='text-xl font-semibold text-slate-800'>1. Intuitive visual editor</p>
          <p className='slate-500 text-center text-sm'>
            Nemo enim ipsam quia voluptas sit aspernatur ist dolores.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span className='flex h-28 w-28 items-center justify-center rounded-full bg-blue-200'>
            <VscSymbolColor className='text-3xl' />
          </span>
          <p className='text-xl font-semibold text-slate-800'>2. Huge design collection</p>
          <p className='slate-500 text-center text-sm'>
            Nemo enim ipsam quia voluptas sit aspernatur ist dolores.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span className='flex h-28 w-28 items-center justify-center rounded-full bg-blue-200'>
            <GrStackOverflow className='text-3xl' />
          </span>
          <p className='text-xl font-semibold text-slate-800'>3. One click installation</p>
          <p className='slate-500 text-center text-sm'>
            Nemo enim ipsam quia voluptas sit aspernatur ist dolores.
          </p>
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
