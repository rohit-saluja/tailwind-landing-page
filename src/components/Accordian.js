import { AiOutlineDown } from 'react-icons/ai';

function Accordian() {
  return (
    <div className='flex justify-between bg-white p-4'>
      <span className='text-slate-700'>How to install App?</span>
      <span>
        <AiOutlineDown />
      </span>
    </div>
  );
}
export default Accordian;
