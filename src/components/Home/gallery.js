import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font lg:w-1/3 lg:mb-0">
              Explore the World with Our Travel Gallery
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">
              Discover the magic of different cultures and landscapes through
              our gallery of breathtaking travel experiences. Join us on a
              virtual tour through picturesque locations, get inspired, and
              start planning your next adventure. Whether you&apos;re an avid
              globetrotter or a novice explorer, our Travel Gallery is your
              passport to a world of wanderlust.
            </p>
          </div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  width={600}
                  height={600}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://i.ibb.co/JdcKNZ3/1.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  width={600}
                  height={600}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://i.ibb.co/tDWHTB5/4.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <Image
                  width={600}
                  height={600}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://i.ibb.co/bzsHcvB/4.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <Image
                  width={600}
                  height={600}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://i.ibb.co/1fp4LFR/2.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  width={600}
                  height={600}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://i.ibb.co/V06yySR/6.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  width={600}
                  height={600}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://i.ibb.co/T1MSNx1/3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
