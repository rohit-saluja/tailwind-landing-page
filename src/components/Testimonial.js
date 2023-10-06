import HeaderSubheader from './HeaderSubheader';

function Testimonial() {
  return (
    <div className='container mx-auto px-28 py-28'>
      <div className='mb-10'>
        <HeaderSubheader
          subHeader='What Our Customers Say?'
          label='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem
        aperiam.'
        >
          our <span className='font-semibold'>testimonial</span>
        </HeaderSubheader>
      </div>
      <p className='mb-3 text-center text-xs text-slate-400'>
        “Itaque earum us tenetur sapiente delectus asperiores repellat.”
      </p>
      <p className='mx-auto mb-4 max-w-lg text-center text-sm text-slate-500'>
        At vero eos et accusamus iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atqued corrupti as quos dolores quas molestias excepturi occaecati
        provident.
      </p>
      <div className='mx-auto mb-3 h-14 w-14 overflow-hidden rounded-full'>
        <img src='user-1.jpg' />
      </div>
      <div className='mx-auto text-center text-slate-800'>Mayra Vasquez</div>
      <div className='mb-12 text-center text-sm text-gray-500'>Web Development, USA</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        <img src='dribbble.png' className='max-w-[150px]' />
        <img src='insta.png' className='max-w-[150px]' />
        <img src='bootstrap.png' className='max-w-[150px]' />
        <img src='jquery.png' className='max-w-[150px]' />
      </div>
    </div>
  );
}
export default Testimonial;
