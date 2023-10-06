function Radio() {
  return (
    <div className='mx-auto flex max-w-fit rounded-full bg-gradient-to-r from-white to-gray-200 p-2'>
      <div className='flex gap-3'>
        <div className='rounded-full bg-blue-500 p-2 text-white'>Monthly</div>
        <div className='p-2 text-slate-700'>Yearly</div>
      </div>
    </div>
  );
}

export default Radio;
