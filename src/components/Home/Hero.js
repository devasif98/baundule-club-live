"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const image = [
  {
    img: "https://i.ibb.co/2gbm8yL/280262742-5130109857046670-4708096580079606806-n.jpg",
    content:
      "Taking a break from your daily routine and exploring new environments can reduce stress and improve mental well-being.",
  },
  {
    img: "https://i.ibb.co/Tm2Sg5w/347560013-289988890171639-8103870393340249027-n.jpg",
    content:
      "Traveling creates lasting memories and experiences that you can cherish for a lifetime. These memories often become some of your most treasured possessions.",
  },
  {
    img: "https://i.ibb.co/kBgC4Ny/347622865-289988930171635-5336226406560910392-n.jpg",
    content:
      "Travel exposes you to diverse cultures, traditions, and languages. It broadens your horizons and fosters cultural sensitivity and understanding.",
  },
  {
    img: "https://i.ibb.co/35bXdqW/359815779-289988560171672-7291747113375088179-n.jpg",
    content:
      "Travel exposes you to diverse cultures, traditions, and languages. It broadens your horizons and fosters cultural sensitivity and understanding.",
  },
  {
    img: "https://i.ibb.co/7WmWC3w/10.jpg",
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
                width={800}
                height={800}
              />
              {/* <div className="overlay"></div> */}
              {/* <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
                                <p className="text-white md:text-xl lg:text-2xl xl:text-3xl w-[90%] md:w-[70%] text-center font-semibold mb-4">
                                    {img.content}
                                </p>
                                <button className="px-4 py-2 text-white rounded-full bg-lime-600 hover:bg-lime-700">
                                    Book Now
                                </button>
                            </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
