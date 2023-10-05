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
        l1={
          <>
            <span className='font-bold'>The wise a therefore always holds .</span>
            <span>in us matters to this principle a selection a rejects pleasures</span>
          </>
        }
        l2={
          <>
            <span>aperiam eaque ipsa quae illo inventore.</span>
            <span className='font-bold'>natus error accusantium doloremque</span>
            <span>Sed perspiciatis omnis a laudantium tota rem</span>
          </>
        }
        l3={
          <>
            <span className='font-bold'>The wise a therefore always holds .</span>
            <span>in us matters to this principle a selection a rejects pleasures</span>
          </>
        }
      />
    </div>
  );
}
export default SmartSolutions;
