'use client';
import { useState } from 'react';
import CarouselThumbs from '../carousel/prodImgGallery/CarouselThumbs';
import ProductImage from '../carousel/prodImgGallery/ProductImage';

const ProductImageGallery = ({ gallery }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='w-11/12 md:w-[628px]'>
            <ProductImage gallery={gallery} thumbsSwiper={thumbsSwiper} />
            <CarouselThumbs gallery={gallery} setThumbsSwiper={setThumbsSwiper} />
        </div>
    );
};

export default ProductImageGallery;