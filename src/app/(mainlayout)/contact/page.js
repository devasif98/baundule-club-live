"use client";
import "@/styles/contact.css";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const time = [
    {
      day: "Monday",
      duration: "09am-8pm",
    },
    {
      day: "Tuesday",
      duration: "09am-8pm",
    },
    {
      day: "Wednesday",
      duration: "09am-8pm",
    },
    {
      day: "Thursday",
      duration: "09am-8pm",
    },
    {
      day: "Friday",
      duration: "09am-8pm",
    },
    {
      day: "Saturday",
      duration: "09am-8pm",
    },
    {
      day: "Sunday",
      duration: "09am-8pm",
    },
  ];
  return (
    <div>
      <Head>
        <title>Contact Us | Baundule Club</title>
      </Head>
      <div className="page-header -mt-7">
        <div className="container mx-auto">
          <div
            className="flex flex-col items-center justify-center"
            style={{
              minHeight: "400px",
            }}
          >
            <h3 className="mb-2 text-white uppercase display-4">Contact</h3>
            <div className="flex text-white">
              <p
                className="text-2xl text-center"
                style={{ letterSpacing: "5px" }}
              >
                Contact For Any Query
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;

const ContactInfo = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-5 mt-3 md:grid-cols-2 lg:grid-cols-3 lg:-mt-20">
        <div className="px-3 py-5 bg-white rounded shadow hover:shadow-md">
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/Assets/icon/call.png"}
              alt=""
              className="w-10 h-10"
              width={500}
              height={500}
            />
            <p className="text-4xl">+</p>
            <Image
              src={"/Assets/icon/WhatsApp_icon.png"}
              alt=""
              className="w-14 h-14"
              width={500}
              height={500}
            />
          </div>
          <h1 className="my-2 text-center">Call Us</h1>
          <div className="text-center">
            <p>
              Reach out to us at{" "}
              <a href="tel:+8801976865523" className="font-bold text-lime-700">
                +8801976865523
              </a>{" "}
              and experience the difference in seamless communication.
            </p>
          </div>
        </div>
        <div className="py-5 bg-white rounded shadow hover:shadow-md">
          <div className="flex justify-center">
            <Image
              src={"/Assets/icon/home.png"}
              alt=""
              className="w-16 h-16"
              width={500}
              height={500}
            />
          </div>
          <h1 className="my-2 text-center">Location</h1>
          <div className="text-center">
            <h2>Dhanmondi 1, Beside Bell Tower</h2>
            <h2>House No. 518, Flat-2B</h2>
          </div>
        </div>
        <div className="px-3 py-5 bg-white rounded shadow hover:shadow-md">
          <div className="flex justify-center">
            <Image
              src={"/Assets/icon/email.png"}
              alt=""
              className="w-16 h-16"
              width={500}
              height={500}
            />
          </div>
          <h1 className="my-2 text-center">Email Us</h1>
          <div className="text-center">
            <p>
              Drop us a digital letter at{" "}
              <a
                href="mailto:baunduleclub@gmaiol.com"
                className="font-bold text-lime-700"
              >
                baunduleclub@gmail.com
              </a>{" "}
              and watch your thoughts spring to life in the digital realm.
              We&apos;re just an email away!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_xtvv8lb",
        "template_9oc1per",
        form.current,
        "nIQorTpjO39k1OKHh"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Your message sent");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
        }
      );
  };
  return (
    <>
      <section className="py-20 mx-5 shadow-xl lg:mx-0">
        <div className="grid max-w-6xl grid-cols-1 gap-6 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className=""
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2145144190695!2d90.37638917328326!3d23.739728642082813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9da996db9f7%3A0x49e0e418d25d7ae5!2sBEL%20Tower!5e0!3m2!1sen!2sbd!4v1696154199426!5m2!1sen!2sbd"
          ></iframe>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-lime-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-500 before:transition before:duration-300">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name..."
                className="w-full p-3 pb-2 placeholder-gray-300 transition bg-transparent bg-white border-b border-l-4 outline-none border-lime-800 invalid:border-red-500 border-l-lime-600"
              />
            </div>
            <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-lime-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-500 before:transition before:duration-300">
              <input
                name="user_subject"
                type="text"
                placeholder="Subject..."
                className="w-full p-3 pb-2 placeholder-gray-300 transition bg-transparent bg-white border-b border-l-4 outline-none border-lime-800 invalid:border-red-500 border-l-lime-600"
              />
            </div>

            <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-lime-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-500 before:transition before:duration-300">
              <input
                name="user_email"
                type="email"
                placeholder="Your email address..."
                className="w-full p-3 pb-2 placeholder-gray-300 transition bg-transparent bg-white border-b border-l-4 outline-none border-lime-800 invalid:border-red-500 border-l-lime-600"
              />
            </div>

            <label className="block">
              <textarea
                rows="3"
                placeholder="Message..."
                className="w-full p-3 pb-2 placeholder-gray-300 transition bg-transparent bg-white border-b border-l-4 outline-none border-lime-600 border-l-lime-600"
                name="message"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="px-3 py-2 text-white rounded bg-lime-600 hover:bg-lime-800"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
