import FooterLinks from './FooterLinks';
import FooterTopSection from './FooterTopSection';

const Footer = () => {
    return (
        <footer className='mx-auto text-[#F4F8FF] font-manrope'>
            <div className='p-5 py-10 md:py-14 bg-black'>
                <FooterTopSection />
                <FooterLinks />
            </div>
            <div className='bg-primary text-center py-4'>
                <p>&copy; 2024 | We5ive</p>
            </div>
        </footer>
    );
};

export default Footer;