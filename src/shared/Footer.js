import "@/styles/footer.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#212121] text-white px-3 lg:px-5 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* Column 1 */}
          <div className="mb-5 lg:w-96">
            <a href="/" className="navbar-brand">
              <h1 className="text-2xl font-bold uppercase">Baundule Club</h1>
            </a>
            <p className="mt-3">
              Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet
              labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor
            </p>
            <h6
              className="mt-4 mb-3 text-white text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Follow Us
            </h6>
            <div className="flex justify-start gap-3">
              <a className="btn-square" href="#">
                <BsTwitter className="" />
              </a>
              <a className="btn-square" href="#">
                <FaFacebookF className="" />
              </a>
              <a className="btn-square" href="#">
                <BiLogoLinkedin className="" />
              </a>
              <a className="btn-square" href="#">
                <BsInstagram className="" />
              </a>
            </div>
          </div>
          {/* Column 2 */}
          {/* <div className="mb-5">
                        <h5 className="mb-4 text-white text-uppercase" style={{ letterSpacing: '5px' }}>
                            Our Services
                        </h5>
                        <div className="flex flex-col justify-start">
                            <Link className="flex items-center mb-2 text-white-50" href="#">
                                <AiOutlineArrowRight className="mr-2 text-sm" />About
                            </Link>
                            <Link className="flex items-center mb-2 text-white-50" href="#">
                                <AiOutlineArrowRight className="mr-2 text-sm" />Services
                            </Link>
                            <Link className="flex items-center mb-2 text-white-50" href="#">
                                <AiOutlineArrowRight className="mr-2 text-sm" />Packages
                            </Link>
                            <Link className="flex items-center mb-2 text-white-50" href="#">
                                <AiOutlineArrowRight className="mr-2 text-sm" />Blog
                            </Link>
                        </div>
                    </div> */}
          {/* Column 4 */}
          <div className="mb-5">
            <h5
              className="mb-4 text-white text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Contact Us
            </h5>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <MdLocationOn />
              <p>123 Street, New York, USA</p>
            </div>
            <div className="flex items-center gap-2 my-2 text-sm md:text-base">
              <HiMailOpen />
              <a href="mailto:asifsikder23@gmail.com">asifsikder23@gmail.com</a>
            </div>
            <div className="flex items-center gap-1 text-sm md:text-base">
              <IoMdCall />
              <a href="tel:+8801872400423">+8801872400423</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
