function NavBar() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-around py-5'>
        <img src='logo-dark.png' alt='' />
        <div className='flex justify-between gap-7'>
          <span className='relative text-blue-500 after:absolute after:-bottom-1 after:left-1/2  after:w-5 after:-translate-x-1/2 after:border-b-2 after:border-blue-500 after:content-[""]'>
            Home
          </span>
          <span className='text-slate-500'>Features</span>
          <span>Screenshots</span>
          <span>Testimonial</span>
          <span>Pricing</span>
          <span>Contact us</span>
        </div>
        <div className='flex gap-2'>
          <span>Login</span>
          <span>Signup</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
