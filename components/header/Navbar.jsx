'use client';
import { useAppSelector } from '@/lib/hooks';
import { navLinks } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import Logo from './Logo';
import MobileNav from './MobileNav';

const Navbar = () => {
    const pathName = usePathname();
    const { products } = useAppSelector((state) => state.cart);
    return (
        <div className='bg-background/50 sticky top-0 border-b backdrop-blur z-50'>
            <div className='container mx-auto py-3 px-5'>
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <MobileNav />
                        <Logo />
                    </div>
                    {/* Navlinks for desktop devices*/}
                    <div className='hidden md:flex items-start md:items-center gap-3 md:gap-6 font-manrope font-semibold'>
                        {
                            navLinks.map(nav => <Link key={nav.title} href={nav.url} className={`${pathName === nav.url ? 'text-primary' : 'text-accent'}`}>{nav.title}</Link>)
                        }
                    </div>
                    {/* Account, Cart and Search Icons */}
                    <div className='flex items-center gap-4'>
                        <div className='relative text-black'>
                            <input type="text" placeholder='Search' className='bg-white p-2 rounded-3xl w-[242px] h-[35px] pl-8 md:block hidden' />
                            <IoIosSearch className='md:absolute md:top-1 md:left-2 w-6 h-6' />
                        </div>
                        {/* Cart Icon */}
                        <Link href='/cart' className='relative'>
                            <IoBagOutline className='h-6 w-6' />
                            <span className='absolute -top-2 -right-4 bg-black text-white px-2 py-0 rounded-full'>{products.length}</span>
                        </Link>
                        {/* Account Icon */}
                        <Link href='/account'><CiUser className='h-6 w-7' /></Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;