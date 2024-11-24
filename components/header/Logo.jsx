import we5ive from '@/app/assests/we5ive-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href='/' className='flex items-end gap-2'>
            <Image src={we5ive} alt='We5ive' width={56} height={40} className='w-10 md:w-14' />
            <h2 className='font-nunito text-2xl md:text-3xl font-bold'>We<span className='text-primary'>5</span>ive</h2>
        </Link>
    );
};

export default Logo;