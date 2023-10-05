import FeatureTwo from './FeatureTwo';

function Connecting() {
  return (
    <div className='mx-auto bg-[url("./../public/features-bg.png")] bg-cover bg-no-repeat px-28 py-20'>
      <FeatureTwo
        header='Discover your destination'
        subHeader='On the other hand, we denounce with righteous indignation so blinded that they cannot.'
        isBgWhite={true}
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
export default Connecting;
