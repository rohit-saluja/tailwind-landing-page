import { useState } from 'react';
import HeaderSubheader from './HeaderSubheader';
import Radio from './Radio';
import PricingItem from './PricingItem';
import { AiOutlineCheck } from 'react-icons/ai';

function PricingPlan() {
  const [pricing, setPricing] = useState('Monthly');

  return (
    <div className='container mx-auto bg-white px-28 py-28'>
      <div className='mb-10'>
        <HeaderSubheader
          subHeader='Pricing Plan'
          label='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem
        aperiam.'
        >
          Our <span className='font-semibold'>Plan</span>
        </HeaderSubheader>
      </div>
      <Radio
        value={pricing}
        onChange={(value) => {
          setPricing(value);
        }}
      />
      <div className='pt-24'>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
          <PricingItem label='Free' amount={0.0} duration='month'>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>3</span> Project
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
                <span className='font-bold'>Unlimited</span> Contracts
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
                Free Supports <span className='font-bold'>27/7</span>
              </p>
            </div>
          </PricingItem>
          <PricingItem label='Standard' amount={29.0} duration='month' isMostPopular={true}>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>10</span> Project
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>1TB</span> Storage
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>Unlimited</span> Contracts
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>12</span> Domains
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                Free Supports <span className='font-bold'>27/7</span>
              </p>
            </div>
          </PricingItem>
          <PricingItem label='Enterprice' amount={49.0} duration='month'>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>20</span> Project
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>2.5TB</span> Storage
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>Unlimited</span> Contracts
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>18</span> Domains
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                Free Supports <span className='font-bold'>27/7</span>
              </p>
            </div>
          </PricingItem>
        </div>
      </div>
    </div>
  );
}
export default PricingPlan;
