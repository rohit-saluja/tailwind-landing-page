import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import PropTypes from 'prop-types';

function Feature({ header, subHeader, l1 }) {
  return (
    <div className='mx-auto bg-gray-50'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <img src='features-1.png' alt='' />
        <div className='lg:ml-16 lg:pt-28'>
          <h2 className='mb-5 text-3xl font-bold text-slate-800'>{header}</h2>
          <p className='mb-3'>{subHeader}</p>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 flex-initial items-center justify-center  rounded-full shadow-lg'>
                <AiOutlineCheck className='text-blue-500' />
              </div>
              <div className='flex-1'>{l1}</div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 flex-initial items-center justify-center  rounded-full shadow-lg'>
                <HiOutlineSquare3Stack3D className='text-blue-500' />
              </div>
              <div className='flex-1'>
                <span>aperiam eaque ipsa quae illo inventore.</span>
                <span className='font-bold'>natus error accusantium doloremque</span>
                <span>Sed perspiciatis omnis a laudantium tota rem</span>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 flex-initial items-center justify-center  rounded-full shadow-lg'>
                <AiOutlineLock className='text-blue-500' />
              </div>
              <div className='flex-1'>
                <span className='font-bold'>The wise a therefore always holds </span>
                <span>in us matters to this principle a selection a rejects pleasures.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Feature.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  l1: PropTypes.any,
};
export default Feature;
