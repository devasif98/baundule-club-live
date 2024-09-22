"use client";

import { AuthContext } from "@/context/UserContext";
import "@/styles/navbar.css";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
    </>
  );
};

export default Navbar;

const TopNav = () => {
  return (
    <>
      <section className="container flex flex-col items-center justify-around mx-auto my-3 md:flex-row">
        <div className="flex items-center gap-3 text-lg">
          <div className="flex items-center gap-2 text-[#656565] text-sm md:text-base">
            <HiMailOpen />
            <a href="mailto:asifsikder23@gmail.com">asifsikder23@gmail.com</a>
          </div>
          <p className="text-sm md:text-base">|</p>
          <div className="flex items-center gap-1 text-[#656565] text-sm md:text-base">
            <IoMdCall />
            <a href="tel:+8801872400423">+8801872400423</a>
          </div>
        </div>
        <div className="my-2 md:my-0">
          <div className="flex items-center gap-5 text-xl text-lime-600">
            <Link href={"/#"}>
              {" "}
              <BiLogoFacebook className="hover:text-lime-700" />
            </Link>
            <Link href={"/#"}>
              {" "}
              <BiLogoTwitter className="hover:text-lime-700" />
            </Link>
            <Link href={"/#"}>
              {" "}
              <BiLogoLinkedin className="hover:text-lime-700" />
            </Link>
            <Link href={"/#"}>
              {" "}
              <BsInstagram className="hover:text-lime-700" />
            </Link>
            <Link href={"/#"}>
              {" "}
              <BiLogoYoutube className="hover:text-lime-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const BottomNav = () => {
  const { user, logOut } = useContext(AuthContext);

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menu = [
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Packages", path: "/packages" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={
          scroll
            ? "bg-transparent sticky-bar stick"
            : "sticky-bar stickyNav stickNav bg-white bg-opacity-60 backdrop-blur-md transition-all ease-in"
        }
      >
        <section className="container mx-auto">
          <div className="flex items-center justify-between lg:rounded-lg">
            <a href={"/"} className="cursor-pointer">
              <div className="flex items-center">
                <div>
                  <Image
                    src="/Assets/logo/logo.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <h1 className="text-xl font-bold uppercase">Baundule Club</h1>
              </div>
            </a>
            <div className="lg:hidden">
              <button
                className="flex items-center p-3 navbar-burger"
                onClick={toggleMenu}
              >
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden mr-3 lg:flex lg:items-center lg:w-auto lg:space-x-6">
              {menu.map((m, i) => (
                <li key={i} className="relative p-2">
                  <Link
                    href={m.path}
                    className="text-sm font-semibold uppercase cursor-pointer "
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
              <li>
                {user ? (
                  <Link
                    href={"/dashboard"}
                    className="px-4 py-1 font-semibold bg-transparent border rounded hover:bg-lime-700 text-lime-600 hover:text-white border-lime-600 hover:border-transparent"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href={"/signin"}
                    className="px-4 py-1 font-semibold bg-transparent border rounded hover:bg-lime-700 text-lime-600 hover:text-white border-lime-600 hover:border-transparent"
                  >
                    Sign in
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`navbar-menu relative z-50 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <div
              className="fixed inset-0 opacity-25 navbar-backdrop"
              onClick={closeMenu}
            ></div>
            <nav className="fixed top-0 bottom-0 left-0 flex flex-col justify-between w-5/6 h-screen max-w-sm px-6 py-6 overflow-y-auto transition-all ease-in bg-gray-900 bg-opacity-90 backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href={"/"}
                    className="px-4 py-2 text-lg font-bold text-white uppercase border cursor-pointer"
                  >
                    Baundule Club
                  </Link>
                  <button className="navbar-close" onClick={closeMenu}>
                    <svg
                      className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <ul>
                    {menu.map((m, i) => (
                      <li key={i} className="mb-1">
                        <Link
                          href={m.path}
                          className="block p-4 text-sm font-semibold text-white rounded cursor-pointer hover:bg-blue-50 hover:text-red-600"
                        >
                          {m.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {user ? (
                <Link
                  href={"/dashboard"}
                  className="bg-transparent hover:bg-[#7083ee] text-white font-semibold hover:text-white py-1 px-4 border border-white hover:border-transparent rounded text-center"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href={"/signin"}
                  className="bg-transparent hover:bg-[#7083ee] text-white font-semibold hover:text-white py-1 px-4 border border-white hover:border-transparent rounded text-center"
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};
