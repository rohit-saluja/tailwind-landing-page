import PropTypes from 'prop-types';

function Radio({ value, onChange }) {
  return (
    <div className='mx-auto flex max-w-fit rounded-full bg-gradient-to-r from-white to-gray-200 p-2'>
      <div className='flex gap-3'>
        <div
          className={`p-2 text-white ${value === 'Monthly' ? 'rounded-full bg-blue-500 ' : ''}`}
          onClick={onChange(value)}
        >
          Monthly
        </div>
        <div
          className={`p-2 text-slate-700 ${value === 'Yearly' ? 'text-slate-500' : ''}`}
          onClick={onChange(value)}
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
