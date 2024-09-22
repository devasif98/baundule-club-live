"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const image = [
  {
    img: "/Assets/hero/1.jpg",
    content:
      "Taking a break from your daily routine and exploring new environments can reduce stress and improve mental well-being.",
  },
  {
    img: "/Assets/hero/2.jpg",
    content:
      "Traveling creates lasting memories and experiences that you can cherish for a lifetime. These memories often become some of your most treasured possessions.",
  },
  {
    img: "/Assets/hero/3.jpg",
    content:
      "Travel exposes you to diverse cultures, traditions, and languages. It broadens your horizons and fosters cultural sensitivity and understanding.",
  },
  {
    img: "/Assets/hero/4.jpg",
    content:
      "Travel exposes you to diverse cultures, traditions, and languages. It broadens your horizons and fosters cultural sensitivity and understanding.",
  },
  {
    img: "/Assets/hero/5.jpg",
    content:
      "Travel exposes you to diverse cultures, traditions, and languages. It broadens your horizons and fosters cultural sensitivity and understanding.",
  },
];

const Hero = () => {
  return (
    <section className="-mt-7 mb-14">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {image.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <Image
                src={img.img}
                alt="dfgd"
                className="w-full h-[250px] md:h-[400px] lg:h-[500px] xl:h-[550px] object-cover"
                width={1800}
                height={800}
                quality={100}  // Setting the image quality to 100 for better resolution
                priority={true} // Preload the image for better performance
              />
              <div className="overlay"></div>
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
                <p className="text-white md:text-xl lg:text-2xl xl:text-3xl w-[90%] md:w-[70%] text-center font-semibold mb-4">
                  {img.content}
                </p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
