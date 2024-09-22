"use client";

import Blog from "@/components/Home/Blog";
import Deals from "@/components/Home/Deals";
import Destination from "@/components/Home/Destination";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";
import Packages from "@/components/Home/Packages";
import Category from "@/components/Home/Recommend";
import "@/styles/home.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const whatsappURL = "https://wa.me/8801872400423";
  return (
    <section className="container relative mx-auto">
      <Hero />
      <Deals />
      <Packages />
      <Destination />
      <Category />
      <Gallery />
      <Blog />
      <Link
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-5 right-5"
      >
        <Image
          src="/Assets/whatsapp.gif"
          alt="WhatsApp"
          style={{ width: "70px", height: "70px", cursor: "pointer" }}
          width={500}
          height={500}
          className="whatsapp-image"
        />
      </Link>
    </section>
  );
};

export default Home;
