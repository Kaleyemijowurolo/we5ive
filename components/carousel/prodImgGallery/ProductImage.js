import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Navigation, Swiper, SwiperSlide, Thumbs } from "./Slider";

export default function ProductImage({ gallery, thumbsSwiper }) {
  const arrowBtnStyles = 'arrow border border-primary p-1 rounded-full text-primary bg-transparent hover:text-white hover:bg-primary duration-200 cursor-pointer';
  return (
    <div className="relative -mt-8 md:-mt-12 -mb-10 md:-mb-0">
      <Swiper
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
      >
        {gallery?.map((imgUrl, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
          >
            <button className={`arrow-left ${arrowBtnStyles}`}><IoIosArrowRoundBack /></button>
            <Image
              src={imgUrl}
              alt={`Product gallery ${imgUrl}`}
              width={450}
              height={350}
              className='max-h-[350px]'
            />
            <button className={`arrow-right ${arrowBtnStyles}`}><IoIosArrowRoundForward /></button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
