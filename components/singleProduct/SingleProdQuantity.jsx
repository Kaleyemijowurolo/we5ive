'use client';
import { decrementCount, incrementCount } from '@/app/features/countSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { FaMinus, FaPlus } from 'react-icons/fa';

const SingleProdQuantity = ({ }) => {
    const dispatch = useAppDispatch();
    const { count } = useAppSelector((state) => state.count);
    return (
        <div>
            <p className='text-base font-bold mb-2 md:mb-4'>Quantity</p>
            <div className='w-[132px] flex items-center gap-2 justify-between bg-[#ECE9FE] rounded-3xl mt-4 py-2 px-6'>
                <button onClick={() => dispatch(decrementCount())}><FaMinus className='h-4 w-3' /></button>
                <p className='text-base font-semibold'>{count}</p>
                <button onClick={() => dispatch(incrementCount())}><FaPlus className='h-4 w-3' /></button>
            </div>
        </div>
    );
};

export default SingleProdQuantity;