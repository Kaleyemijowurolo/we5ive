import { getCategoryProducts } from '@/lib/utils';
import Link from 'next/link';
import ArrivalsCarouisel from './carousel/ArrivalsCarouisel';
import { buttonVariants } from './ui/button';

const NewArrivals = async () => {
    const { mens, womens } = await getCategoryProducts();
    // Combine the products
    const products = [...mens, ...womens];
    return (
        <section className='container mx-auto p-5 py-12'>
            <div className='font-manrope'>
                <p className='text-base md:text-xl text-primary uppercase'>Featured Product</p>
                <h5 className='text-2xl md:text-3xl font-bold'>New Arrivals</h5>
            </div>
            <ArrivalsCarouisel products={products} />
            <div className='w-36 mx-auto'>
                <Link href='/shop' className={`${buttonVariants({ variant: 'default' })} w-full`}>See More</Link>
            </div>
        </section>
    );
};

export default NewArrivals;