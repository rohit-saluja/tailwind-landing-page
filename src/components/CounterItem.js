import PropTypes from 'prop-types';

function CounterItem({ component, counter, label }) {
  return (
    <div className='-z-0 rounded-md bg-gray-400/30 p-4 font-bold text-white'>
      <div className='flex items-center justify-between'>
        {component}
        <div className='flex flex-col  text-white '>
          <span className='mb-2 text-3xl'>{counter}</span>
          <span className='text-lg font-medium uppercase'>{label}</span>
        </div>
      </div>
    </div>
  );
}

CounterItem.propTypes = {
  component: PropTypes.element,
  counter: PropTypes.number,
  label: PropTypes.string,
};
export default CounterItem;
