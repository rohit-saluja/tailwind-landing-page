import { useState } from 'react';
import HeaderSubheader from './HeaderSubheader';
import Radio from './Radio';

function PricingPlan() {
  const [pricing, setPricing] = useState('Monthly');
  console.log(pricing);
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
          console.log(value);
          setPricing(value);
        }}
      />
    </div>
  );
}
export default PricingPlan;
