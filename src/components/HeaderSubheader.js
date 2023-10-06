import PropTypes from 'prop-types';

function HeaderSubheader({ subHeader, label, children }) {
  return (
    <div className='mx-auto mb-12 max-w-md text-center leading-8'>
      <h1 className='font-thin uppercase text-slate-950'>{children}</h1>
      <h2 className='text-2xl font-bold'>{subHeader}</h2>
      <p className='text-sm text-slate-500'>{label}</p>
    </div>
  );
}

HeaderSubheader.propTypes = {
  subHeader: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any,
};
export default HeaderSubheader;
