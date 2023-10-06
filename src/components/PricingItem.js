import PropTypes from 'prop-types';

function PricingItem({ label, amount, duration, children, isMostPopular = false }) {
  return (
    <div className='relative overflow-hidden p-8 shadow-lg'>
      {isMostPopular && (
        <div className='absolute right-[-47px] top-[41px] rotate-45 bg-red-500 px-12 text-center text-white shadow-lg'>
          Most Popular
        </div>
      )}

      <div className='mb-6 rounded-md bg-gray-100 p-10'>
        <p className='text-center'>{label}</p>
        <p className='text-center'>
          <span className='text-3xl font-bold text-blue-500'>${amount}</span>
          <span>/{duration}</span>
        </p>
      </div>
      <div className='mb-10 flex flex-col gap-6'>{children}</div>
      <button className='flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-200  p-4 text-white'>
        <span>Choose plan</span>
      </button>
    </div>
  );
}

PricingItem.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  duration: PropTypes.string,
  children: PropTypes.element,
  isMostPopular: PropTypes.bool,
};

export default PricingItem;
