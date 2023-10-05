import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import PropTypes from 'prop-types';

function FeatureTwo({ header, subHeader, l1, l2, l3, isBgWhite = false }) {
  return (
    <div className={`mx-auto ${isBgWhite ? '' : 'bg-gray'} container`}>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
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
              <div className='flex-1'>{l2}</div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 flex-initial items-center justify-center  rounded-full shadow-lg'>
                <AiOutlineLock className='text-blue-500' />
              </div>
              <div className='flex-1'>{l3}</div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <img src='features-1.png' alt='' />
        </div>
      </div>
    </div>
  );
}

FeatureTwo.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  l1: PropTypes.any,
  l2: PropTypes.any,
  l3: PropTypes.any,
  isBgWhite: PropTypes.bool,
};
export default FeatureTwo;
