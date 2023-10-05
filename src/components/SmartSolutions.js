import Feature from './Feature';
import HeaderSubheader from './HeaderSubheader';

function SmartSolutions() {
  return (
    <div className='mx-auto bg-gray-50 px-28 py-20'>
      <div className='mb-24'>
        <HeaderSubheader
          subHeader='Smart Solutions for Buys People'
          label='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem
        aperiam.'
        >
          Our <span className='font-semibold'>features</span>
        </HeaderSubheader>
      </div>
      <Feature
        header='Discover your destination'
        subHeader='On the other hand, we denounce with righteous indignation so blinded that they cannot.'
      />
    </div>
  );
}
export default SmartSolutions;
