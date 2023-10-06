import { AiOutlineCheck } from 'react-icons/ai';

function PricingItem() {
  return (
    <div className='p-8 shadow-lg'>
      <div className='mb-6 rounded-md bg-gray-100 p-10'>
        <p className='text-center'>Free</p>
        <p className='text-center'>
          <span className='text-3xl font-bold text-blue-500'>$0.00</span>
          <span>/Month</span>
        </p>
      </div>
      <div className='mb-10 flex flex-col gap-6'>
        <div className='flex items-center gap-3'>
          <span>
            <AiOutlineCheck className='text-green-500' />
          </span>
          <p>
            <span className='font-bold'>3</span> Projects
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <span>
            <AiOutlineCheck className='text-green-500' />
          </span>
          <p>
            <span className='font-bold'>580GB</span> Storage
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <span>
            <AiOutlineCheck className='text-green-500' />
          </span>
          <p>
            <span className='font-bold'>Unlimited</span> Contacts
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <span>
            <AiOutlineCheck className='text-green-500' />
          </span>
          <p>
            <span className='font-bold'>5</span> Domains
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <span>
            <AiOutlineCheck className='text-green-500' />
          </span>
          <p>
            Free Support <span className='font-bold'>24/7</span>
          </p>
        </div>
      </div>

      <button className='flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-200  p-4 text-white'>
        <span>Choose plan</span>
      </button>
    </div>
  );
}

export default PricingItem;
