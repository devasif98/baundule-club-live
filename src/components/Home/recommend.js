import "@/styles/category.css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Categories = () => {
  const { data } = useQuery("tour", async () => {
    const response = await axios.get("http://localhost:5000/category");
    return response.data;
  });

  return (
    <>
      <section className="container mx-auto my-14">
        <div className="pb-3 my-5 text-center">
          <h6
            className="uppercase text-lime-700"
            style={{ letterSpacing: "5px" }}
          >
            POPULAR IN BANGLADESH
          </h6>
          <h1 className="text-xl font-bold md:text-4xl ">
            Our Recommendations
          </h1>
        </div>
        <div className="">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={25}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {data?.map((cat, i) => (
              <SwiperSlide key={i}>
                <Link href={`/tour/${cat.catId}`}>
                  <div className="w-full h-[177px] md:h-[280px] lg:h-[400px] xl:h-[500] mx-auto">
                    <Image
                      src={cat.img}
                      alt=""
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                    />
                    <div className="image-overlay">
                      <div className="w-full md:mt-10">
                        <div className="py-4 bg-black bg-opacity-40 lg:py-5">
                          <h1 className="">{cat.subtitle}</h1>
                          <h2 className="font-semibold ">{cat.title}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Categories;
