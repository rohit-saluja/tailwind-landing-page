import { useState } from 'react';
import HeaderSubheader from './HeaderSubheader';
import Radio from './Radio';
import PricingItem from './PricingItem';

function PricingPlan() {
  const [pricing, setPricing] = useState('Monthly');
  console.log(pricing);
  const items = [
    { normal: 'Projects', bold: '3' },
    { normal: 'Storage', bold: '580GB' },
    { normal: 'Contacts', bold: 'Unlimited' },
    { normal: 'Domains', bold: '5' },
    { normal: 'Free Support', bold: '24/7' },
  ];
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
          <PricingItem label='Free' amount={0.0} duration='month' items={items} />
        </div>
      </div>
    </div>
  );
}
export default PricingPlan;
