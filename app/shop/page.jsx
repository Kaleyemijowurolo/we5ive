import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/utils';

export const metadata = {
    title: 'Shop - We5ive',
    description: 'Explore the latest Fashion Products.'
};

const Shop = async () => {
    const { products } = await getAllProducts();
    return (
        <div className='container mx-auto p-5'>
            <h3 className='font-manrope text-2xl font-semibold text-primary border-l-4 border-primary pl-3'>All Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Shop;