import FloatingCartIcon from '@/components/singleProduct/FloatingCartIcon';
import ProductDetails from '@/components/singleProduct/ProductDetails';
import ProductImageGallery from '@/components/singleProduct/ProductImageGallery';
import ProductInfo from '@/components/singleProduct/ProductInfo';
import RelatedProducts from '@/components/singleProduct/RelatedProducts';
import { getSingleProduct } from '@/lib/utils';

export const generateMetadata = async ({ params }) => {
    const id = params.id;
    const product = await getSingleProduct(id);
    return {
        title: `${product.title} - We5ive`,
        description: product.description
    };
};

const SingleProduct = async ({ params, searchParams }) => {
    const id = params.id;
    const product = await getSingleProduct(id);
    // console.log(product.images);
    return (
        <div className='container mx-auto p-5 font-manrope text-accent relative'>
            <p>Feature Product / <span className='text-primary'>New Arrival</span></p>
            <section className='flex flex-col md:flex-row items-start gap-2 md:gap-6'>
                {/* Product Image Gallery */}
                <ProductImageGallery gallery={product.images} />
                {/* Product Info */}
                <ProductInfo product={product} searchParams={searchParams} />
            </section>
            {/* Product Details */}
            <ProductDetails product={product} />
            {/* Related Products/ Others products from Same Category */}
            <RelatedProducts prodCat={product.category} />
            {/* Floating Cart Icon */}
            <FloatingCartIcon />
        </div>
    );
};

export default SingleProduct;