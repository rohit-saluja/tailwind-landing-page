import HeaderSubheader from './HeaderSubheader';
import Accordian from './Accordian';

function Faq() {
  return (
    <div className='container mx-auto bg-gray-50 px-28 py-28'>
      <HeaderSubheader label='Frequently Asked Questions' subHeader='Frequently Asked Questions'>
        Our <span className='font-semibold'>FAQS</span>
      </HeaderSubheader>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <img src='faq.png' alt='' />
        <Accordian />
      </div>
    </div>
  );
}
export default Faq;
