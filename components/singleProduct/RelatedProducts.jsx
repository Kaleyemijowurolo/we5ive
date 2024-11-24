import { getRelatedProds } from '@/lib/utils';
import Link from 'next/link';
import ArrivalsCarousel from '../carousel/ArrivalsCarouisel';
import { buttonVariants } from '../ui/button';

const RelatedProducts = async ({ prodCat }) => {
    const { products } = await getRelatedProds(prodCat);
    return (
        <section className='my-11 md:my-20'>
            <h2 className='text-[28px] font-bold'>Related Products</h2>
            <ArrivalsCarousel products={products} />
            <div className='w-36 mx-auto'>
                <Link href='/shop' className={`${buttonVariants({ variant: 'default' })} w-full`}>See More</Link>
            </div>
        </section>
    );
};

export default RelatedProducts;