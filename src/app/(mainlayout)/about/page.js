import "@/styles/about.css";
import Image from "next/image";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaAward, FaMoneyCheckAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="container mx-auto">
        <Hero />
        <Feature />
        <Guild />
      </div>
    </>
  );
};

export default About;
const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 my-5 bg-white rounded-xl lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-r-lg lg:shadow-none md:h-96 lg:h-full"
            src="https://i.ibb.co/wQr7ZZy/aboutbnr.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-24 lg:max-w-lg lg:pr-5">
            <p className="inline-block py-px mb-4 font-semibold tracking-wider uppercase rounded-full text-lime-600 bg-teal-accent-400">
              About Us
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Welcome to Baundule Club, where adventure meets expertise, and
              wanderlust finds its perfect companion. Our story is one of
              passion for travel, a commitment to exceptional experiences, and a
              dedication to making your travel dreams come true.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Feature = () => {
  const data = [
    {
      title: "Competitive Pricing",
      desc: "We offer competitive pricing to ensure affordability for our customers. Our goal is to provide high-quality products at the best prices in the market.",
      tag: "cp",
    },
    {
      title: "Best Services",
      desc: "Our commitment to providing the best services sets us apart. We strive to meet and exceed our customers expectations.",
      tag: "bs",
    },
    {
      title: "Worldwide Coverage",
      desc: "With worldwide coverage, we can reach customers all around the globe. Our network spans across continents to serve you better.",
      tag: "wc",
    },
  ];
  return (
    <>
      <div className="mx-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.map((d, i) => {
            return (
              <>
                <div className="my-5 " key={i}>
                  <div className="mb-4 lg:flex lg:mb-0">
                    <div className="flex justify-center my-2 lg:my-0">
                      <div className="flex items-center justify-center bg-lime-600 mr-5 h-[106px] w-[106px] p-10">
                        {d.tag === "cp" && (
                          <FaMoneyCheckAlt className="text-4xl text-white" />
                        )}
                        {d.tag === "bs" && (
                          <FaAward className="text-4xl text-white" />
                        )}
                        {d.tag === "wc" && (
                          <AiOutlineGlobal className="text-4xl text-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-xl font-semibold text-center lg:text-left">
                        {d.title}
                      </h5>
                      <p className="m-0 text-sm text-center lg:text-justify">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Guild = () => {
  const guild = [
    {
      name: "Md. Asif Ullah Sikder",
      pos: "Customer Care Specialists",
      img: "https://i.ibb.co/TvsY78W/pic.png",
    },
    {
      name: "Sazzad Mahmud Shadhin",
      pos: "Destination Experts",
      img: "https://i.ibb.co/JtnGLkf/sazzad.png",
    },
    {
      name: "Imran Hossain Badhon",
      pos: "Sustainability Advocates",
      img: "https://i.ibb.co/XVWVjv3/imran.png",
    },
    {
      name: "Atiqur Rahaman Khan",
      pos: "Travel Consultants",
      img: "https://i.ibb.co/CQmtZGh/atiq.png",
    },
  ];
  return (
    <>
      <div className="my-10">
        <div className="my-10 text-center">
          <h6
            className="uppercase text-lime-700"
            style={{ letterSpacing: "5px" }}
          >
            Our Team
          </h6>
          <h1 className="text-xl font-bold md:text-4xl ">
            Meet The Travel Pros
          </h1>
        </div>
        <div className="grid gap-5 px-10 md:grid-cols-2 lg:grid-cols-4">
          {guild.map((g, i) => {
            return (
              <>
                <div className="pb-1" key={i}>
                  <div className="mb-4 bg-white rounded-lg team-item">
                    <div className="team-img relative overflow-hidden h-[270px]">
                      <Image
                        src={g.img}
                        alt=""
                        className="object-cover"
                        width={500}
                        height={500}
                      />
                      <div className="team-social">
                        <a
                          className="btn btn-outline-primary btn-square"
                          href=""
                        >
                          <BsTwitter />
                        </a>
                        <a
                          className="btn btn-outline-primary btn-square"
                          href=""
                        >
                          <BsFacebook />
                        </a>
                        <a
                          className="btn btn-outline-primary btn-square"
                          href=""
                        >
                          <BsInstagram />
                        </a>
                        <a
                          className="btn btn-outline-primary btn-square"
                          href=""
                        >
                          <BsLinkedin />
                        </a>
                      </div>
                    </div>
                    <div className="py-4 text-center">
                      <h5 className="text-xl font-semibold truncate">
                        {g.name}
                      </h5>
                      <p className="m-0">{g.pos}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
