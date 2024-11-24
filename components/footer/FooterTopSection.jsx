import we5ive from '@/app/assests/we5ive-logo-white.svg';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import Link from 'next/link';

const FooterTopSection = () => {
    return (
        <section className='contaienr mx-auto flex md:flex-row flex-col items-start justify-between gap-6'>
            {/* About */}
            <div className='w-11/12 md:w-[410px]'>
                <Link href='/' className='flex items-end gap-2'>
                    <Image src={we5ive} alt='We5ive' width={56} height={40} className='w-8 md:w-12' />
                    <h2 className='font-nunito text-2xl md:text-3xl font-bold -mb-1'>We<span className='text-primary'>5</span>ive</h2>
                </Link>
                <p className='mt-4 md:mt-7'>Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est.</p>
            </div>
            {/* Newsletter */}
            <div className='w-11/12 md:w-[630px]'>
                <h5 className='text-2xl font-bold'>Sign Up For Our Newsletter!</h5>
                <p>Get notified about updates and be the first to get early access to new <br />
                    Podcast episodes.</p>
                <div className="flex w-10/12 items-center mt-8">
                    <Input type="email" placeholder="Your email address" className='w-full bg-white text-accent rounded-l-lg rounded-r-none' />
                    <Button type="submit" className='rounded-l-none rounded-r-lg -ml-2'>Subscribe</Button>
                </div>
            </div>
        </section>
    );
};

export default FooterTopSection;