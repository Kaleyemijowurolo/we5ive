import Link from 'next/link';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterLinks = () => {
    return (
        <section className='contaienr mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:mt-16'>
            <div>
                <h5 className='font-bold'>Contact Us</h5>
                <p>support@we5ive.com</p>
            </div>
            <div className='flex flex-col gap-2'>
                <Link href='/about'>About Us</Link>
                <Link href='/contact'>Contact Us</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <Link href='/privacy'>Privacy Policy</Link>
                <Link href='/terms'>Terms & Conditions</Link>
            </div>
            <div>
                <h5 className='font-bold'>Social Links</h5>
                <div className="flex gap-5 mt-2">
                    <Link href='/'><FaFacebook className='w-5 h-5 text-[#3b5998]' /></Link>
                    <Link href='/'><FaXTwitter className='w-5 h-5' /></Link>
                    <Link href='/'><FaLinkedin className='w-5 h-5 text-[#0077b5]' /></Link>
                </div>
            </div>
        </section>
    );
};

export default FooterLinks;