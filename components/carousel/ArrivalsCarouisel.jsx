'use client';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import Link from 'next/link';
import AddToCartBtn from '../AddToCartBtn';

const ArrivalsCarousel = ({ products }) => {

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            className="w-full my-6"
        >
            <CarouselContent>
                {products.map((product) => (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1">
                            <Card className='bg-white border-none rounded-2xl'>
                                <CardContent>
                                    <Link href={`/product/${product.id}`}>
                                        <Image src={product.thumbnail} alt={product.title} width={100} height={100} className="w-full" />
                                    </Link>
                                    <div className='flex items-center justify-between mb-4'>
                                        <p>
                                            <Link href={`/product/${product.id}`}>
                                                {product.title.slice(0, 14) + '...'}
                                            </Link>
                                        </p>
                                        <p>BDT {Math.ceil(product.price * 80)}</p>
                                    </div>
                                    <AddToCartBtn product={product} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute -top-12 right-10">
                <CarouselPrevious className='ml-5' />
                <CarouselNext />
            </div>
        </Carousel>
    );
};

export default ArrivalsCarousel;
