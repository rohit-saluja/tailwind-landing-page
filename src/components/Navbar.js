function NavBar() {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-around py-5'>
        <img src='logo-dark.png' alt='' />
        <div className='flex justify-between gap-7'>
          <span className='relative text-blue-500 after:absolute after:-bottom-1 after:left-1/2  after:w-5 after:-translate-x-1/2 after:border-b-2 after:border-blue-500 after:content-[""]'>
            Home
          </span>
          <span className='text-slate-500'>Features</span>
          <span className='text-slate-500'>Screenshots</span>
          <span className='text-slate-500'>Testimonial</span>
          <span className='text-slate-500'>Pricing</span>
          <span className='text-slate-500'>Contact us</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-slate-500'>Login</span>
          <span className='rounded-sm border border-gray-300 bg-blue-200 px-3 py-1 text-blue-500'>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
