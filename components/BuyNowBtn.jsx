'use client';
import { addToCart } from '@/app/features/cartSlice';
import { resetCount } from '@/app/features/countSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import toast from 'react-hot-toast';
import { Button } from './ui/button';

const BuyNowBtn = ({ product }) => {
    //Currently Buy Now Button is set to add to cart funtionality, but later we can make is compatible to use as buy now or checkout button.
    const { count } = useAppSelector((state) => state.count);
    const dispatch = useAppDispatch();

    const handleAddToCart = (product) => {
        const productData = {
            id: product.id,
            quantity: count,
            price: product.price,
            title: product.title,
            thumbnail: product.thumbnail
        };
        dispatch(addToCart(productData));
        toast.success('Product added to Cart.');
        dispatch(resetCount());
    };
    return (
        <Button
            variant="default"
            className='w-full'
            onClick={() => handleAddToCart(product)}
        >Buy Now</Button>
    );
};

export default BuyNowBtn;
