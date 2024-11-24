'use client';
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import { IoBag } from 'react-icons/io5';
import { buttonVariants } from '../ui/button';

const FloatingCartIcon = () => {
    const { products } = useAppSelector((state) => state.cart);
    return (
        <Link href='/cart' className={`hidden fixed h-[100px] top-[58%] right-0 rounded-l-2xl rounded-r-none md:flex flex-col items-center ${buttonVariants({ variant: 'default' })}`}>
            <IoBag className='w-8 h-8' />
            <p className='font-bold text-center'>Your bag <br />{products.length}</p>
        </Link>
    );
};

export default FloatingCartIcon;