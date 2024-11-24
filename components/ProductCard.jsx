import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import AddToCartBtn from './AddToCartBtn';
import ReviewIcons from './ReviewIcons';

const ProductCard = ({ product }) => {

    return (
        <Card className='bg-white border-none rounded-2xl relative'>
            <CardContent>
                <p className='w-11 absolute top-0 right-5  rounded-b-3xl bg-primary text-white text-center p-2 font-manrope font-bold text-sm leading-4'>
                    Up to {Math.ceil(product.discountPercentage)}%
                </p>
                <Link href={`/product/${product.id}`}>
                    <Image src={product.thumbnail} alt={product.title} width={100} height={100} className="w-full mb-2" />
                </Link>
                {/* Product Reviews Count */}
                <div className='flex items-center gap-1 mb-4'>
                    <ReviewIcons />
                    <p className='text-accent'>({product.reviews.length})</p>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <p>
                        <Link href={`/product/${product.id}`}>{product.title.slice(0, 14) + '...'}</Link>
                    </p>
                    <p>BDT {Math.ceil(product.price * 80)}</p>
                </div>
                <AddToCartBtn product={product} />
            </CardContent>
        </Card>
    );
};

export default ProductCard;
