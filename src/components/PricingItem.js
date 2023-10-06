import { AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';

function PricingItem({ label, amount, duration, items }) {
  console.log(items);
  return (
    <div className='p-8 shadow-lg'>
      <div className='mb-6 rounded-md bg-gray-100 p-10'>
        <p className='text-center'>{label}</p>
        <p className='text-center'>
          <span className='text-3xl font-bold text-blue-500'>${amount}</span>
          <span>/{duration}</span>
        </p>
      </div>
      <div className='mb-10 flex flex-col gap-6'>
        {items &&
          items.map((item, index) => (
            <div className='flex items-center gap-3' key={index}>
              <span>
                <AiOutlineCheck className='text-green-500' />
              </span>
              <p>
                <span className='font-bold'>{item.bold}</span> {item.normal}
              </p>
            </div>
          ))}
      </div>
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
  items: PropTypes.array,
};

export default PricingItem;
