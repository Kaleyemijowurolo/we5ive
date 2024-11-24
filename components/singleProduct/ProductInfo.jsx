import AddToCartBtn from '../AddToCartBtn';
import BuyNowBtn from '../BuyNowBtn';
import ReviewIcons from '../ReviewIcons';
import { Button } from '../ui/button';
import ProductSizeColor from './ProductSizeColor';
import SingleProdQuantity from './SingleProdQuantity';

const ProductInfo = ({ product, searchParams }) => {

    return (
        <div className='w-full md:flex-1'>
            {/* Product Info */}
            <div className='flex flex-col gap-4 md:gap-6'>
                <Button className='w-48 bg-[#2F1C59] hover:bg-[#2F1C59] font-semibold'>New Arrival</Button>
                <h2 className='text-[19px] md:text-[33px] font-bold md:font-semibold'>{product.title}</h2>
                {/* Product Reviews Count */}
                <div className='flex items-center gap-1'>
                    <ReviewIcons />
                    <p className='text-accent'>({product.rating})</p>
                    <p className='text-primary ml-3'>{product.reviews.length} reviews</p>
                </div>
                <h3 className='text-[23px] md:text-[28px] font-bold'>BDT {Math.ceil(product.price * 80)}</h3>
            </div>
            {/* Product Metadata */}
            <hr className='bg-[#CECECE] w-full my-4 md:my-8' />
            {/* Product Sizes and Colors */}
            <ProductSizeColor searchParams={searchParams} />
            <hr className='bg-[#CECECE] w-full my-4 md:my-8' />
            {/* Product Quantity Count */}
            <SingleProdQuantity />

            {/* Buy Now and Add to Cart Button */}
            <div className='w-full md:w-10/12 flex flex-col md:flex-row items-center gap-4 mt-8'>
                <div className='w-full md:w-1/2'>
                    <BuyNowBtn product={product} />
                </div>
                <div className='w-full md:w-1/2'>
                    <AddToCartBtn product={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;