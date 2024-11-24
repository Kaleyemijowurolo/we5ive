import { getCategoryProducts } from '@/lib/utils';
import Link from 'next/link';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import ProductCard from './ProductCard';
import { Button, buttonVariants } from './ui/button';

const BigDeal = async () => {
    const { mens, womens } = await getCategoryProducts();
    // Combine the products
    const products = [...mens, ...womens].slice(0, 8);
    return (
        <section className='container mx-auto p-5 py-12'>
            <div className='flex items-start justify-between'>
                <div className='font-manrope'>
                    <p className='text-base md:text-xl text-primary uppercase'>Summer</p>
                    <h5 className='text-2xl md:text-3xl font-bold'>New Arrivals</h5>
                </div>
                <div className='flex items-center gap-2'>
                    <Button variant='outline' className='w-8 rounded-full'><IoArrowBack /></Button>
                    <Button variant='outline' className='w-8 rounded-full'><IoArrowForward /></Button>
                </div>
            </div>
            {/* Display Products */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
            <div className='w-36 mx-auto'>
                <Link href='/shop' className={`${buttonVariants({ variant: 'default' })} w-full`}>See More</Link>
            </div>
        </section>
    );
};

export default BigDeal;