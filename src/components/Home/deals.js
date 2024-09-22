"use client";
import Image from "next/image";
import { useState } from "react";
import "../../styles/deals.css";

const Deals = () => {
  const [selectedtab, setSelectedTab] = useState("hot");

  const deals = [
    {
      category: "hot",
      title: "Find Your Dream Getaway in Hot Deals",
      description:
        "Are you dreaming of palm-fringed beaches, cultural immersion in exotic cities, or thrilling adventures in breathtaking landscapes? Now, those dreams can become a reality without burning a hole in your pocket.",
      banner: "/Assets/about.jpg",
      packages: [
        {
          img: "https://i.ibb.co/NTJqVLB/maldives.jpg",
          country: "Maldives",
        },
        {
          img: "https://i.ibb.co/9V9HbK8/thailand.jpg",
          country: "Thailand",
        },
        {
          img: "https://i.ibb.co/FDjVP2P/india.jpg",
          country: "India",
        },
        {
          img: "https://i.ibb.co/Kh0Bby9/sajek.jpg",
          country: "Bangladesh",
        },
      ],
    },
    {
      category: "resortpkg",
      title: "Find Your Dream Getaway in Hot Deals",
      description:
        "Are you dreaming of palm-fringed beaches, cultural immersion in exotic cities, or thrilling adventures in breathtaking landscapes? Now, those dreams can become a reality without burning a hole in your pocket.",
      banner: "/Assets/signin.jpeg",
      packages: [
        {
          img: "https://i.ibb.co/NTJqVLB/maldives.jpg",
          country: "Maldives",
        },
        {
          img: "https://i.ibb.co/9V9HbK8/thailand.jpg",
          country: "Thailand",
        },
        {
          img: "https://i.ibb.co/FDjVP2P/india.jpg",
          country: "India",
        },
        {
          img: "https://i.ibb.co/Kh0Bby9/sajek.jpg",
          country: "Bangladesh",
        },
      ],
    },
    {
      category: "internationalpkg",
      title: "Find Your Dream Getaway in Hot Deals",
      description:
        "Are you dreaming of palm-fringed beaches, cultural immersion in exotic cities, or thrilling adventures in breathtaking landscapes? Now, those dreams can become a reality without burning a hole in your pocket.",
      banner: "/Assets/hotabout.jpg",
      packages: [
        {
          img: "https://i.ibb.co/NTJqVLB/maldives.jpg",
          country: "Maldives",
        },
        {
          img: "https://i.ibb.co/9V9HbK8/thailand.jpg",
          country: "Thailand",
        },
        {
          img: "https://i.ibb.co/FDjVP2P/india.jpg",
          country: "India",
        },
        {
          img: "https://i.ibb.co/Kh0Bby9/sajek.jpg",
          country: "Bangladesh",
        },
      ],
    },
  ];
  return (
    <>
      <section className="container mx-auto my-14">
        <div className="pb-3 mb-3 text-center">
          <h6
            className="uppercase text-lime-700"
            style={{ letterSpacing: "5px" }}
          >
            Deals
          </h6>
          <h1 className="text-xl font-bold md:text-4xl ">
            Explore, Save, Discover More!
          </h1>
        </div>

        <CatBtn selectedtab={selectedtab} setSelectedTab={setSelectedTab} />
        <div>
          {selectedtab == "hot" &&
            deals.map((p, i) => p.category === "hot" && <All p={p} key={i} />)}
          {selectedtab == "resort" &&
            deals.map(
              (p, i) => p.category === "resortpkg" && <All p={p} key={i} />
            )}
          {selectedtab == "international" &&
            deals.map(
              (p, i) =>
                p.category === "internationalpkg" && <All p={p} key={i} />
            )}
        </div>
      </section>
    </>
  );
};

export default Deals;

const CatBtn = ({ selectedtab, setSelectedTab }) => {
  return (
    <>
      <div id="catBtn">
        <ul className="tab tab-tabs" role="tablist">
          <li
            className="tab-item"
            onClick={() => {
              setSelectedTab("hot");
            }}
            data-aos="fade-right"
          >
            <a
              className={
                selectedtab == "hot" ? "tab-link btn active" : "tab-link btn"
              }
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              Hot Deals
            </a>
          </li>
          <li
            className="tab-item"
            onClick={() => {
              setSelectedTab("resort");
            }}
            data-aos="fade-up"
          >
            <a
              className={
                selectedtab == "resort" ? "tab-link btn active" : "tab-link btn"
              }
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              Resort Packages
            </a>
          </li>
          <li
            className="tab-item"
            onClick={() => {
              setSelectedTab("international");
            }}
            data-aos="fade-left"
          >
            <a
              className={
                selectedtab == "international"
                  ? "tab-link btn active"
                  : "tab-link btn"
              }
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              International Tour Pack
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const All = ({ p, i }) => {
  return (
    <div className="container pt-5 mx-auto" key={i}>
      <div className="items-center justify-center md:flex">
        <div className="hidden lg:w-1/2 lg:block">
          <div className="h-[760px] w-full">
            <Image
              className="object-cover w-full h-full"
              src={p.banner}
              alt=""
              width={640}
              height={700}
            />
          </div>
        </div>
        <div className="lg:w-1/2 lg:-ml-20">
          <div className="p-4 bg-white md:p-10">
            {p.category === "hot" ? (
              <h6
                className="uppercase text-primary"
                style={{ letterSpacing: "5px" }}
              >
                Hot Deals
              </h6>
            ) : p.category === "resortpkg" ? (
              <h6
                className="uppercase text-primary"
                style={{ letterSpacing: "5px" }}
              >
                Resort Packages
              </h6>
            ) : (
              <h6
                className="uppercase text-primary"
                style={{ letterSpacing: "5px" }}
              >
                International Tour Pack
              </h6>
            )}

            <h1 className="mb-3 text-3xl font-semibold">{p.title}</h1>
            <p className="mb-4">{p.description}</p>
            <div className="grid grid-cols-2 gap-5 mb-4">
              {p?.packages?.map((pkg, i) => {
                return (
                  <div
                    className="relative mb-2 overflow-hidden destination-item"
                    key={i}
                  >
                    <Image
                      src={pkg.img}
                      alt=""
                      className="h-28 md:h-48"
                      width={500}
                      height={500}
                    />

                    <a
                      className="text-white destination-overlay text-decoration-none"
                      href=""
                    >
                      <h5 className="text-xl font-bold text-white">
                        {pkg.country}
                      </h5>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
