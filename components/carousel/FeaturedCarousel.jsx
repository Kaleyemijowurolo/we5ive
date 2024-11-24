'use client';
import MenCollection from '@/app/assests/mens-collection.png';
import WomenCollection from '@/app/assests/womenscollection.png';
import {
    Carousel,
    CarouselContent,
    CarouselDotNext,
    CarouselDotPrevious,
    CarouselItem
} from "@/components/ui/carousel";
import Image from 'next/image';
import ShopNow from '../ui/ShopNow';

const FeaturedCarousel = () => {

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full my-6"
        >
            <CarouselContent className='mb-10'>
                <CarouselItem>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
                        <Image src={MenCollection} alt='Men Collection' width={620} height={566} />
                        <div>
                            <h3 className='font-manrope text-2xl md:text-5xl font-semibold text-black uppercase mb-6'>Men Collection</h3>
                            <ShopNow />
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
                        <Image src={WomenCollection} alt='Women Collection' width={620} height={566} />
                        <div>
                            <h3 className='font-manrope text-2xl md:text-5xl font-semibold text-black uppercase mb-6'>Women Collection</h3>
                            <ShopNow />
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-0 right-1/2">
                <CarouselDotPrevious className='ml-5' />
                <CarouselDotNext />
            </div>
        </Carousel>
    );
};

export default FeaturedCarousel;
