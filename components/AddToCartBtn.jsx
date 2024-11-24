'use client';
import { addToCart } from '@/app/features/cartSlice';
import { resetCount } from '@/app/features/countSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import toast from 'react-hot-toast';
import { Button } from './ui/button';

const AddToCartBtn = ({ product }) => {
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
            variant="outline"
            className='w-full'
            onClick={() => handleAddToCart(product)}
        >Add to Cart</Button>
    );
};

export default AddToCartBtn;
