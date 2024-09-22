"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Fade,
  Modal,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineArrowDown, AiOutlineForm } from "react-icons/ai";
import {
  BiPurchaseTag,
  BiSolidLocationPlus,
  BiSolidTime,
  BiTimer,
} from "react-icons/bi";
import { BsFillFlagFill, BsGlobe2, BsInfoCircle } from "react-icons/bs";
import { GiCheckMark, GiClick } from "react-icons/gi";
import {
  MdLocationPin,
  MdOutlineDescription,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { RiContactsFill, RiTeamFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbCurrencyTaka } from "react-icons/tb";
import { useQuery } from "react-query";

import "@/styles/pkgdetails.css";
import FsLightbox from "fslightbox-react";
import toast from "react-hot-toast";

const PackagesDetails = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const { data: details } = useQuery("details", async () => {
    const response = await axios.get(
      `https://baundule-club-server.vercel.app/packages/${id}`
    );
    console.log(response);
    return response.data;
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    const updatedQuantity = quantity + 1;
    const maxMember = details.maxmember;

    if (updatedQuantity <= maxMember) {
      setQuantity(updatedQuantity);
    } else {
      toast.error(`There are only ${details.maxmember} seats on the selected Package, to book you must contact us`);
    }
  };


  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalValue = details?.amount * quantity;

  const { handleSubmit, control, reset } = useForm();
  const handleFormSubmit = async (data) => {
    const phoneNumber = "+8801872400423";
    const packageLink = `https://baundule-club.vercel.app/packagedetails/${details._id}`;

    const message = `Hello, I am ${data.name}.
        I want to book ${details.location}. I already submit a booking form in your mail.
        Here is the link to the package: (${packageLink})`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    const mergedData = {
      location: details.location,
      members: quantity,
      total: totalValue,
      ...data,
    };
    fetch("https://baundule-club-server.vercel.app/bookingform", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mergedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking information sent.");
          setOpen(false);
          reset();
          setQuantity(1);
          window.open(whatsappLink, "_blank");
        } else {
          toast.error(data.message);
        }
      });
  };

  const iframeHtml = details?.mapURL
    .replace(/width="[^"]+"/, 'width="100%"')
    .replace(/height="[^"]+"/, 'height="250px"');


    const navigateToOrder = () => {
      router.push(`/booking/${id}`);
    };

  return (
    <>
      <div className="bg-scroll page-header bg-inner division -mt-7">
        <div className="container mx-auto">
          <div
            className="flex flex-col items-center justify-center"
            style={{
              minHeight: "400px",
            }}
          >
            <h3 className="mb-2 text-center text-white uppercase display-4">
              {details?.location}
            </h3>
            <div className="flex text-white">
              <p
                className="text-2xl text-center"
                style={{ letterSpacing: "5px" }}
              >
                Your Amazing Tour
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="gap-5 lg:flex">
          <div className="lg:w-2/3 box">
            <Accord details={details} />
          </div>
          <div className="sticky lg:w-1/3 box top-16">
            <div className="mb-3">
              <div>
                <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <MdLocationPin className="text-lg text-lime-500" />
              <h1>{details?.location}</h1>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <BsFillFlagFill className="text-lg text-lime-500" />
              <h1>{details?.division}</h1>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <RiTeamFill className="text-lg text-lime-500" />
              <h1>
                From {details?.minmember} to {details?.maxmember} people
              </h1>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2 ">
                <BiSolidTime className="text-lg text-lime-500" />
                <h1>{details?.duration} days</h1>
              </div>
              <div className="flex items-center gap-2 ">
                <TbCurrencyTaka className="text-xl text-lime-500" />
                <h1 className="text-xl font-bold">{details?.amount} TK</h1>
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex items-center gap-2 mb-3">
              <h1>
                Free cancellation up to twenty-four (24) hours before the start
                of the tour.
              </h1>
            </div>
            <hr className="my-3" />
            <div className="w-full">

                <button onClick={navigateToOrder} className="w-full py-2 text-center text-white rounded-lg btn bg-lime-500 hover:bg-lime-700">
                  Book Now
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Gallery details={details} />
      </div>
    </>
  );
};

export default PackagesDetails;

const Accord = ({ details }) => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div>
        <Accordion
          elevation={0}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            id="panel1d-header"
            focusVisibleClassName="text-blue-300"
            expandIcon={
              <div className="inline-flex items-center justify-center w-8 h-8 transition duration-500 transform border border-gray-700 rounded-full ease group-focus:-rotate-180">
                <AiOutlineArrowDown className="tabicon" />
              </div>
            }
            aria-controls="panel1a-content"
            className="faqHeader"
          >
            <div className="flex items-center gap-2">
              <BsGlobe2 className="tabicon" />{" "}
              <h1 className="text-lg font-bold uppercase">Information</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "0",
            }}
          >
            <div className="p-4 duration-500 ease">
              {details?.information?.map((info, i) => (
                <p key={i}>{info.desc}</p>
              ))}
              <div className="mb-3">
                <h2 className="my-3 font-bold">
                  For booking this tour, please follow the following steps :
                </h2>
                <ul>
                  <li>
                    <div className="relative flex pb-12">
                      <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                        <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-lime-500">
                        <GiClick />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                          STEP 1
                        </h2>
                        <p className="leading-relaxed">
                          Click on the Book Now Button
                        </p>
                      </div>
                    </div>
                    <div className="relative flex pb-12">
                      <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                        <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-lime-500">
                        <AiOutlineForm />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                          STEP 2
                        </h2>
                        <p className="leading-relaxed">
                          Then fill up the form and submit.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex">
                      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-lime-500">
                        <RiContactsFill />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                          STEP 3
                        </h2>
                        <p className="leading-relaxed">
                          After submitting you contact with admin about Tour and
                          Payment
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            id="panel2d-header"
            focusVisibleClassName="text-blue-300"
            expandIcon={
              <div className="inline-flex items-center justify-center w-8 h-8 transition duration-500 transform border border-gray-700 rounded-full ease group-focus:-rotate-180">
                <AiOutlineArrowDown className="tabicon" />
              </div>
            }
            aria-controls="panel2a-content"
            className="faqHeader"
          >
            <div className="flex items-center gap-2">
              <MdOutlineDescription className="tabicon" />{" "}
              <h1 className="text-lg font-bold">Description</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "0",
            }}
          >
            <div className="p-4 duration-500 ease">
              {details?.description?.map((desc, i) => {
                return (
                  <div key={i}>
                    <p>{desc.desc}</p>
                    <div>
                      <p className="my-2 font-semibold">
                        The Caravan is facilitated with:
                      </p>
                      <ul className="ml-5 list-disc">
                        {desc.facilitated.map((facility, k) => (
                          <li key={k} className="list-outside">
                            {facility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="my-2 font-semibold">
                        Hopping Destinations:
                      </p>
                      <ul className="mb-3 ml-5 list-disc">
                        {desc.hopdestination.map((hopping, k) => (
                          <li key={k} className="list-outside">
                            {hopping}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="my-2 font-semibold">
                        Complementary Food Menu:
                      </p>
                      <ul className="ml-5 list-disc">
                        {desc.food.map((menu, k) => (
                          <li key={k} className="list-outside">
                            <span className="underline">Welcome Snacks</span>:{" "}
                            {menu.welcome}
                          </li>
                        ))}
                        {desc.food.map((menu, k) => (
                          <li key={k} className="list-outside">
                            <span className="underline">Lunch Platter</span>:{" "}
                            {menu.lunch}
                          </li>
                        ))}
                        {desc.food.map((menu, k) => (
                          <li key={k} className="list-outside">
                            <span className="underline">Evening Snacks</span>:{" "}
                            {menu.evening}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            id="panel2d-header"
            focusVisibleClassName="text-blue-300"
            expandIcon={
              <div className="inline-flex items-center justify-center w-8 h-8 transition duration-500 transform border border-gray-700 rounded-full ease group-focus:-rotate-180">
                <AiOutlineArrowDown className="tabicon" />
              </div>
            }
            aria-controls="panel2a-content"
            className="faqHeader"
          >
            <div className="flex items-center gap-2">
              <MdOutlineTipsAndUpdates className="tabicon" />{" "}
              <h1 className="text-lg font-bold">Travel Tips</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "0",
            }}
          >
            <div className="p-4 overflow-hidden duration-500 ease ">
              <div className="">
                <ul className="ml-5 list-disc">
                  {details?.tips?.map((tip, k) => (
                    <li key={k} className="list-outside">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            id="panel2d-header"
            focusVisibleClassName="text-blue-300"
            expandIcon={
              <div className="inline-flex items-center justify-center w-8 h-8 transition duration-500 transform border border-gray-700 rounded-full ease group-focus:-rotate-180">
                <AiOutlineArrowDown className="tabicon" />
              </div>
            }
            aria-controls="panel2a-content"
            className="faqHeader"
          >
            <div className="flex items-center gap-2">
              <BiPurchaseTag className="tabicon" />{" "}
              <h1 className="text-lg font-bold">Inclusion & Exclusion</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "0",
            }}
          >
            <div className="p-4 overflow-hidden duration-500 ease">
              <div className="">
                <div className="ml-5 list-disc">
                  {details?.inorexclu?.map((into, k) => (
                    <div key={k}>
                      <ul className="">
                        {into.in.map((enter, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <GiCheckMark className="text-green-600" />
                            {enter}
                          </li>
                        ))}
                      </ul>
                      <ul className="">
                        {into.out.map((outt, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <RxCross2 className="text-red-600" />
                            {outt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            id="panel2d-header"
            focusVisibleClassName="text-blue-300"
            expandIcon={
              <div className="inline-flex items-center justify-center w-8 h-8 transition duration-500 transform border border-gray-700 rounded-full ease group-focus:-rotate-180">
                <AiOutlineArrowDown className="tabicon" />
              </div>
            }
            aria-controls="panel2a-content"
            className="faqHeader"
          >
            <div className="flex items-center gap-2">
              <BiSolidLocationPlus className="tabicon" />{" "}
              <h1 className="text-lg font-bold">Pick Up Location</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "0",
            }}
          >
            <div className="p-4 overflow-hidden duration-500 ease ">
              <p className="">
                <span className="font-bold">Pick Up: </span>
                {details?.pickup}
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            id="panel2d-header"
            focusVisibleClassName="text-blue-300"
            expandIcon={
              <div className="inline-flex items-center justify-center w-8 h-8 transition duration-500 transform border border-gray-700 rounded-full ease group-focus:-rotate-180">
                <AiOutlineArrowDown className="tabicon" />
              </div>
            }
            aria-controls="panel2a-content"
            className="faqHeader"
          >
            <div className="flex items-center gap-2">
              <BiTimer className="tabicon" />{" "}
              <h1 className="text-lg font-bold">Duration</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "0",
            }}
          >
            <div className="p-4 overflow-hidden duration-500 ease ">
              <p className="">
                <span className="font-bold">Timing Duration: </span>
                {details?.duration <= 1
                  ? `${details?.duration} Day`
                  : `${details?.duration} Days`}
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            id="panel2d-header"
            focusVisibleClassName="text-blue-300"
            expandIcon={
              <div className="inline-flex items-center justify-center w-8 h-8 transition duration-500 transform border border-gray-700 rounded-full ease group-focus:-rotate-180">
                <AiOutlineArrowDown className="tabicon" />
              </div>
            }
            aria-controls="panel2a-content"
            className="faqHeader"
          >
            <div className="flex items-center gap-2">
              <BsInfoCircle className="tabicon" />{" "}
              <h1 className="text-lg font-bold">Additional Information</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "0",
            }}
          >
            <div className="p-4 overflow-hidden duration-500 ease">
              <div className="">
                <ul className="ml-5 list-disc">
                  {details?.additional?.map((addinfo, k) => (
                    <li key={k} className="list-outside">
                      {addinfo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
const Gallery = ({ details }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });
  const openLightbox = (slideIndex) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slideIndex,
    });
  };

  const [swiperInstance, setSwiperInstance] = useState(null);
  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };
  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };
  return (
    <div className="box">
      <h1 className="mb-3 text-xl font-bold">FROM OUR GALLERY</h1>
      <p className="md:w-[70%] mb-5">
        Explore our stunning collection of images from around the world. Our
        gallery showcases the beauty of different destinations, cultures, and
        experiences. Join us on a visual journey through the lens of our
        passionate photographers.
      </p>
      <Swiper
        onSwiper={setSwiperInstance}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        slidesPerView={3}
        spaceBetween={25}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Navigation, FreeMode]}
        className="mySwiper"
      >
        {details?.images?.map((img, i) => (
          <SwiperSlide key={img.id} onClick={() => openLightbox(i)}>
            <Image
              src={img.img}
              className="object-cover w-full h-56"
              width={800}
              height={500}
              alt={details.location}
            />
          </SwiperSlide>
        ))}
        <div className="relative flex justify-center">
          <div className="swiper-button-container">
            <button className="swiper-button-prev" onClick={goPrev}></button>
            <button className="swiper-button-next" onClick={goNext}></button>
          </div>
        </div>
      </Swiper>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={details?.images?.map((image) => image.img)}
        sourceIndex={lightboxController.slide}
        type="image"
      />
    </div>
  );
};
