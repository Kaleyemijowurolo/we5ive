import { navLinks } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMenu2Fill } from "react-icons/ri";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '../ui/sheet';
import Logo from './Logo';

const MobileNav = () => {
    const pathName = usePathname();
    return (
        <div className="flex items-center justify-center md:hidden">
            <Sheet>
                <SheetTrigger>
                    <RiMenu2Fill className='w-6 h-6 text-black' />
                </SheetTrigger>
                <SheetContent className='overflow-x-auto' side={'left'}>
                    <Logo />
                    <hr className='my-2 border-b border-gray-300' />
                    <SheetFooter className='flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 font-manrope font-semibold'>
                        {
                            navLinks.map(nav => <SheetClose
                                key={nav.title} asChild
                            >
                                <Link
                                    href={nav.url}
                                    className={`${pathName === nav.url ? 'text-primary' : 'text-accent'}`}
                                >{nav.title}</Link>
                            </SheetClose>)
                        }
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;