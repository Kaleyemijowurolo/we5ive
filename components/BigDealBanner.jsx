import BigDeal from '@/app/assests/bigdeal.png';
import Image from 'next/image';
import ShopNow from './ui/ShopNow';

const BigDealBanner = () => {
    return (
        <section className='container mx-auto p-5'>
            <div className='h-auto md:h-[450px] bg-white md:flex bigdeal'>
                <div className='flex flex-col justify-center items-center md:items-start gap-2 md:gap-6 p-6 md:p-16 text-center'>
                    <p className='text-primary font-pacifico text-2xl'>Big Deal</p>
                    <h3 className='font-manrope text-3xl md:text-5xl font-semibold text-black'><span className='text-primary'>30%</span> Off for New Customers</h3>
                    <ShopNow />
                </div>
                <Image src={BigDeal} alt='Big Deal' className='md:mt-20 mx-auto' width={427} height={438} />
            </div>
        </section>
    );
};

export default BigDealBanner;