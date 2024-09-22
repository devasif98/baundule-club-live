"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdLuggage, MdOutlineDashboard, MdSettings } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const Sidebar = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Dashboard", link: "/dashboard" },
    { label: "Users", link: "/dashboard/users" },
    { label: "Bookings", link: "/dashboard/booking" },
    { label: "Packages", link: "/dashboard/packages" },
    { label: "Categories", link: "/dashboard/categories" },
    { label: "Blogs", link: "/dashboard/blogs" },
    { label: "Pages", link: "/dashboard/pages" },
    { label: "Profile", link: "/dashboard/profile" },
    { label: "Settings", link: "/dashboard/settings" },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="fixed left-0 z-10 flex flex-col h-full text-white transition-all duration-300 bg-gray-900 border-none top-16 w-14 hover:w-64 md:w-64 sidebar">
        <div className="flex flex-col justify-between flex-grow overflow-x-hidden overflow-y-auto">
          <div>
            <ul className="flex flex-col py-4 space-y-1">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`relative group ${
                    activeItem === index ? "bg-red-600" : ""
                  }`}
                >
                  <Link
                    href={item.link}
                    className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6`}
                    onClick={() => handleItemClick(index)}
                  >
                    <span className="inline-flex items-center justify-center ml-4">
                      <Icon item={item} />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="hidden px-5 py-3 text-xs text-center mb-14 md:block">
            Copyright @2023
          </p>
        </div>
      </div>
    </>
  );
};

const Icon = ({ item }) => {
  return (
    <>
      {item.label === "Home" && <AiOutlineHome className="w-5 h-5" />}
      {item.label === "Dashboard" && <MdOutlineDashboard className="w-5 h-5" />}
      {item.label === "Users" && <FaRegUser className="w-5 h-5" />}
      {item.label === "Bookings" && <FaRegBookmark className="w-5 h-5" />}
      {item.label === "Packages" && <MdLuggage className="w-5 h-5" />}
      {item.label === "Categories" && <BiCategory className="w-5 h-5" />}
      {item.label === "Blogs" && <CgWebsite className="w-5 h-5" />}
      {item.label === "Pages" && <RiPagesLine className="w-5 h-5" />}
      {item.label === "Profile" && <ImProfile className="w-5 h-5" />}
      {item.label === "Settings" && <MdSettings className="w-5 h-5" />}
    </>
  );
};

export default Sidebar;
