"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/destination.css";

const Destination = () => {
  const images = [
    {
      id: 1,
      img: "https://i.ibb.co/N9PmFJn/tanguar.jpg",
      vdo: "https://firebasestorage.googleapis.com/v0/b/baunduleclub-7c453.appspot.com/o/tanguar.mp4?alt=media&token=2b5d5838-61fa-4e6c-8540-dfe1b1c339b6",
      country: "Tanguar Haor",
    },
    {
      id: 2,
      img: "https://i.ibb.co/kcd0wtm/bandarban.jpg",
      vdo: "https://firebasestorage.googleapis.com/v0/b/baunduleclub-7c453.appspot.com/o/bandorban.mp4?alt=media&token=67ac0255-9fb6-44a7-865f-3048e09f94a4",
      country: "Bandarban",
    },
    {
      id: 3,
      img: "https://i.ibb.co/XV7V6QT/cox.jpg",
      vdo: "https://firebasestorage.googleapis.com/v0/b/baunduleclub-7c453.appspot.com/o/cox.mp4?alt=media&token=63e14ef3-3503-4825-ba19-36d1ba4dee4d",
      country: "Coxs Bazar",
      cities: "100",
    },
    {
      id: 4,
      img: "https://i.ibb.co/wYZdQmY/shree.jpg",
      vdo: "https://firebasestorage.googleapis.com/v0/b/baunduleclub-7c453.appspot.com/o/shreemangal.mp4?alt=media&token=16cd9a42-7c75-4989-87b9-43056c2ab7d7",
      country: "Shreemangal",
      cities: "100",
    },
    {
      id: 5,
      img: "https://i.ibb.co/7R1SJtw/rajshahi.jpg",
      vdo: "https://firebasestorage.googleapis.com/v0/b/baunduleclub-7c453.appspot.com/o/rajshahi.mp4?alt=media&token=73659949-a816-4de4-9bbb-3f4ea2fc2acd",
      country: "Rajshahi",
      cities: "100",
    },
    {
      id: 6,
      img: "https://i.ibb.co/Sd8xxgj/dhaka.png",
      vdo: "https://firebasestorage.googleapis.com/v0/b/baunduleclub-7c453.appspot.com/o/dhaka.mp4?alt=media&token=1bc526c4-0627-45e3-a865-c22ee6772460",
      country: "Dhaka",
      cities: "100",
    },
  ];
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container mx-auto my-14">
        <div className="pb-3 my-5 text-center">
          <h6
            className="uppercase text-lime-700"
            style={{ letterSpacing: "5px" }}
          >
            Destination
          </h6>
          <h1 className="text-xl font-bold md:text-4xl ">
            Explore Top Destination
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 mx-10 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => {
            return (
              <div
                className="relative mb-2 overflow-hidden destination-item"
                key={i}
              >
                {showVideo ? (
                  <video width="640" height="360" muted autoPlay loop>
                    <source src={img.vdo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="h-[220px]">
                    <Image
                      src={img.img}
                      alt=""
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                    />
                  </div>
                )}

                <Link
                  className="text-white destination-overlay text-decoration-none"
                  href={`/destination/${img.id}`}
                >
                  <h5 className="text-xl font-bold text-white uppercase">
                    {img.country}
                  </h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Destination;
