import Image from "next/image";
import "../../styles/blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "A Journey Through Europe's Hidden Gems",
      imageUrl: "/Assets/blog/blog-1.jpeg",
      desc: "Embark on a magical adventure across Europe&apos;s lesser-known destinations. Explore charming villages, historic towns, and breathtaking landscapes that are off the beaten path. Get ready to discover the secrets of Europe&apos;s hidden gems.",
      date: [{ day: 24, month: "Sep", year: "2023" }],
    },
    {
      title: "Unforgettable Experiences in Southeast Asia",
      imageUrl: "/Assets/blog/blog-3.jpeg",
      desc: "Dive into the vibrant cultures and landscapes of Southeast Asia. From the bustling streets of Bangkok to the serene beaches of Bali, this blog post will guide you through the most unforgettable experiences this region has to offer.",
      date: [{ day: 25, month: "Sep", year: "2023" }],
    },
    {
      title: "Road Trip Adventures in the American Southwest",
      imageUrl: "/Assets/blog/blog-2.jpeg",
      desc: "Hit the open road and explore the breathtaking landscapes of the American Southwest. Follow our road trip itinerary as we take you through national parks, red rock formations, and desert wonders. Get ready for the adventure of a lifetime.",
      date: [{ day: 26, month: "Sep", year: "2023" }],
    },
  ];
  return (
    <div className="container-fluid my-14">
      <div className="container pt-5 pb-3">
        <div className="pb-3 mb-3 text-center">
          <h6
            className="uppercase text-lime-700"
            style={{ letterSpacing: "5px" }}
          >
            Our Blog
          </h6>
          <h1 className="text-xl font-bold md:text-4xl ">
            Latest From Our Blog
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 pb-3 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="p-4 overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg"
            >
              <div className="relative">
                <Image
                  className="w-full"
                  src={post.imageUrl}
                  alt={post.title}
                  width={500}
                  height={500}
                />
                {post.date.map((d, i) => (
                  <div key={i} className="blog-date">
                    <h6 className="font-bold text-white">{d.day}</h6>
                    <small className="text-white uppercase">{d.month}</small>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <p className="text-lg font-semibold h-14">{post.title}</p>
                <p className="text-sm text-justify">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
