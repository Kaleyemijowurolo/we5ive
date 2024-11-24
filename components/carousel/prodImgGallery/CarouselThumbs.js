import Image from "next/image";
import { Swiper, SwiperSlide } from "./Slider";

export default function CarouselThumbs({ gallery, setThumbsSwiper }) {
  return (
    <div className="max-w-md mx-auto relative">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        watchSlidesProgress={true}
        freeMode={true}
        observer={true}
        observeParents={true}
      >
        {gallery?.map((imgUrl, index) => (
          <SwiperSlide
            key={index}
            className="hidden md:flex items-center justify-center cursor-pointer rounded overflow-hidden border border-border-200 border-opacity-75 hover:opacity-75"
          >
            <Image
              src={imgUrl}
              alt={`Product thumb gallery ${imgUrl}`}
              width={80}
              height={80}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
