"use client";

import "@/styles/packages.css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useQuery, useQueryClient } from "react-query";

const Packages = () => {
  const [displayedPackages, setDisplayedPackages] = useState(3);

  const loadMore = () => {
    setDisplayedPackages(data.length);
  };

  const { data, isLoading } = useQuery("packages", async () => {
    const response = await axios.get(
      "https://baundule-club-server.vercel.app/toppackages"
    );
    return response.data;
  });

  const queryClient = useQueryClient();
  queryClient.invalidateQueries("package");
  return (
    <>
      <div className="container mx-auto my-14">
        <div className="pb-3 mb-3 text-center">
          <h6
            className="uppercase text-lime-700"
            style={{ letterSpacing: "5px" }}
          >
            Packages
          </h6>
          <h1 className="text-xl font-bold md:text-4xl ">
            Perfect Tour Packages
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-10 mx-5 md:grid-cols-2 xl:grid-cols-3 lg:mx-24">
          {data?.slice(0, displayedPackages).map((packages, i) => {
            return (
              <div
                className="overflow-hidden transition rounded-lg shadow hover:shadow-lg"
                key={i}
              >
                <Image
                  alt="Office"
                  src={packages.coverimg}
                  className="object-cover w-full h-56"
                  width={500}
                  height={500}
                />

                <div className="p-4 bg-white">
                  <div className="flex items-center gap-1 text-lg font-semibold">
                    <MdLocationPin className="text-lime-500" />
                    <h1>{packages.location}</h1>
                  </div>
                  <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
                    {packages.description?.map((desc) => desc.desc)}
                  </p>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t">
                    <Link
                      href={`/packagedetails/${packages._id}`}
                      className="group inline-flex items-center gap-1 text-sm font-medium text-[#65A30D]"
                    >
                      Find out more
                      <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                      >
                        &rarr;
                      </span>
                    </Link>
                    <h5 className="flex items-center m-0 text-lg font-semibold">
                      <TbCurrencyTaka className="text-xl" /> {packages.amount}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          {displayedPackages < data?.length && (
            <div className="mt-4 text-center">
              <button
                onClick={loadMore}
                className="px-4 py-2 text-white rounded-lg bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Packages;
