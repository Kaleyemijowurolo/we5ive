import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

const ShopNow = () => {

  return (
    <Link href='/shop'>
      <button
        className='text-white rounded-3xl flex items-center'
      >
        <span className='bg-secondary py-1 px-5 rounded-full'>Shop Now</span>
        <GoArrowUpRight className='bg-secondary p-2 h-8 w-8 rounded-full' />
      </button>
    </Link>
  );
};

export default ShopNow;
