import HeroFeatures from './HeroFeatures';
import ShopNow from './ui/ShopNow';

const HeroBanner = () => {
    return (
        <section className='hero h-[582px] relative bg-opacity-80'>
            <div className='w-11/12 h-[400px] md:h-[500px] mx-auto flex flex-col items-center justify-center text-white'>
                <h2 className='font-manrope text-2xl md:text-5xl font-bold mb-2'>Elevate Your Everyday Style</h2>
                <p className='text-sm md:text-xl mb-6'>Discover the Latest Trends in Sustainable Fashion</p>
                <ShopNow />
            </div>
            {/* Features Section */}
            <HeroFeatures />
        </section>
    );
};

export default HeroBanner;