"use client";
import "@/styles/service.css";
import Image from "next/image";
import CountUp from "react-countup";
import {
  BsBookmarkCheckFill,
  BsFillSignTurnSlightRightFill,
  BsHouseAddFill,
  BsPeopleFill,
} from "react-icons/bs";

const Service = () => {
  const services = [
    {
      title: "Personalized Getaways",
      desc: "Your dream vacation, your way. Our travel agency creates bespoke journeys to your preferred destinations, ensuring a trip as unique as you are.",
      img: "https://i.ibb.co/5kbyQz2/confidence.png",
    },
    {
      title: "Travel with Confidence",
      desc: "Explore the world confidently with our expert advice. Our travel consultants offer local insights and insider tips for a worry-free adventure.",
      img: "https://i.ibb.co/nkPwFhN/travel.png",
    },
    {
      title: "Easy Booking, Dream Travel",
      desc: "Booking your ideal getaway has never been easier. Discover and reserve flights, hotels, and activities effortlessly with our user-friendly platform.",
      img: "https://i.ibb.co/Nxgr1Jx/vacation.png",
    },
  ];
  return (
    <>
      <div className="page-header -mt-7">
        <div className="container mx-auto">
          <div
            className="flex flex-col items-center justify-center"
            style={{
              minHeight: "400px",
            }}
          >
            <h3 className="mb-2 text-white uppercase display-4">Service</h3>
            <div className="flex text-white">
              <p
                className="text-2xl text-center"
                style={{ letterSpacing: "5px" }}
              >
                Tailored Travel Experiences Just for You
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container z-50 mx-auto mb-5 -mt-20">
        <div className="grid grid-cols-1 gap-5 mx-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            return (
              <div
                className="p-4 text-center bg-white service-item md:p-10"
                key={i}
              >
                <Image
                  src={service.img}
                  alt=""
                  className="w-20 h-20 mx-auto"
                  width={500}
                  height={500}
                />
                <h5 className="my-2 text-lg font-bold">{service.title}</h5>
                <p className="m-0">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Stat />
      <Content />
    </>
  );
};

export default Service;

const Stat = () => {
  const stat = [
    {
      title: "Total Customers",
      count: 7500,
      tag: "tc",
    },
    {
      title: "Total Booked",
      count: 1500,
      tag: "tb",
    },
    {
      title: "Total Trip",
      count: 570,
      tag: "tt",
    },
    {
      title: "Total Visited",
      count: 12800,
      tag: "tv",
    },
  ];
  return (
    <>
      <section className="container px-10 mx-auto my-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stat.map((s, i) => {
            return (
              <div
                className="flex p-4 space-x-4 bg-white rounded-lg md:space-x-6 "
                key={i}
              >
                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-lime-400">
                  {s.tag === "tc" && (
                    <BsPeopleFill className="text-white w-9 h-9" />
                  )}
                  {s.tag === "tb" && (
                    <BsBookmarkCheckFill className="text-white w-9 h-9" />
                  )}
                  {s.tag === "tt" && (
                    <BsFillSignTurnSlightRightFill className="text-white w-9 h-9" />
                  )}
                  {s.tag === "tv" && (
                    <BsHouseAddFill className="text-white w-9 h-9" />
                  )}
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <CountUp
                    start={0}
                    end={s.count}
                    duration={2}
                    delay={0}
                    className="text-2xl font-semibold"
                  />
                  <p className="font-semibold capitalize">{s.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className="my-10">
        <div className="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16">
          <div className="lg:bg-gray-50 lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <div>
                <video width="640" height="360" muted autoPlay loop>
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/baunduleclub-7c453.appspot.com/o/dhaka.mp4?alt=media&token=1bc526c4-0627-45e3-a865-c22ee6772460"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Explore the World with Baundule Club
              </h2>
              <p className="my-8 text-gray-600">
                Plan your dream vacation with us and experience the beauty of
                the world. Discover new destinations, cultures, and adventures.
              </p>
              <div className="space-y-4 divide-y divide-gray-800">
                <div className="flex gap-4 mt-8 md:items-center">
                  <div className="flex w-12 h-12 gap-4 bg-indigo-100 rounded-full bg-indigo-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-indigo-500 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="text-lg font-semibold text-indigo-500">
                      24/7 Customer Support
                    </h4>
                    <p className="text-gray-500">
                      Our team is always ready to assist you, no matter where
                      you are.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4 md:items-center">
                  <div className="flex w-12 h-12 gap-4 rounded-full bg-lime-100 bg-lime-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-lime-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="text-lg font-semibold text-lime-600">
                      Personalized Tours
                    </h4>
                    <p className="text-gray-500 ">
                      We tailor your trips to your preferences for an
                      unforgettable experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
