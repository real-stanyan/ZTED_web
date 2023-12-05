// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperImageList from "@/data/home-swiper-imageList.json";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HomeSwiper() {
  return (
    <>
      <Swiper
        style={{ maxWidth: "100vw", height: "90vh", overflow: "hidden" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type:
            typeof window !== "undefined" && window.innerWidth <= 768
              ? "fraction"
              : "bullets",
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {SwiperImageList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={`/home_swiper/${item}`}
                key={index}
                alt={item}
                width={1000}
                height={1000}
                className="object-contain min-w-[100vw]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
