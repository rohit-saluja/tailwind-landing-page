import { AiOutlineGlobal } from 'react-icons/ai';
import { AiOutlineSmile } from 'react-icons/ai';
import { TbBulbFilled } from 'react-icons/tb';
import { FaUserFriends } from 'react-icons/fa';
import CounterItem from './CounterItem';
function Counter() {
  return (
    <div className="relative mx-auto bg-[url('./../public/counter-bg.jpg')] bg-cover bg-fixed bg-top  bg-no-repeat py-28">
      <div className='absolute inset-0 h-full w-full bg-gray-900/50'></div>
      <div className='container mx-auto grid grid-cols-1 gap-4 px-28 sm:grid-cols-2 lg:grid-cols-4'>
        <CounterItem
          counter='825'
          label='global brands'
          component={<AiOutlineGlobal className='text-3xl font-bold' />}
        />
        <CounterItem
          counter='1800+'
          label='happy clients'
          component={<AiOutlineSmile className='text-3xl font-bold' />}
        />
        <CounterItem
          counter='599+'
          label='global brands'
          component={<TbBulbFilled className='text-3xl font-bold' />}
        />
        <CounterItem
          counter='2000+'
          label='user clients'
          component={<FaUserFriends className='text-3xl font-bold' />}
        />
      </div>
    </div>
  );
}
export default Counter;
