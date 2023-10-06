import PropTypes from 'prop-types';

function Radio({ value, onChange }) {
  return (
    <div className='mx-auto flex max-w-fit rounded-full bg-gradient-to-r from-white to-gray-200 p-2'>
      <div className='flex gap-3'>
        <div
          className={`cursor-pointer p-2  ${
            value === 'Monthly' ? 'rounded-full bg-blue-500 text-white' : 'text-slate-500'
          }`}
          onClick={() => onChange('Monthly')}
        >
          Monthly
        </div>
        <div
          className={`cursor-pointer p-2  ${
            value === 'Yearly' ? 'rounded-full bg-blue-500 text-white' : 'text-slate-500'
          }`}
          onClick={() => onChange('Yearly')}
        >
          Yearly
        </div>
      </div>
    </div>
  );
}

Radio.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Radio;
