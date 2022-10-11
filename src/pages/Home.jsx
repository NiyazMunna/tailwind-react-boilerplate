import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner from "../images/banner.png";

function Home({ isNavOpen }) {
  const moviesList = [
    {
      id: 1,
      image:
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg",
      title: "Money Heist",
      description: "The Most Perfect Country on the Planet Switzerland",
    },
    {
      id: 2,
      image:
        "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODE0Mk5MRUkzQ0wuX0FDX1NMMTUwMF8uanBn.jpg",
      title: "Stranger Things",
      description: "The Most Perfect Country on the Planet Switzerland",
    },
    {
      id: 3,
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e63aa1100068709.5f00aa5e73d4a.jpg",
      title: "Dark",
      description: "The Most Perfect Country on the Planet Switzerland",
    },
    {
      id: 4,
      image:
        "https://i0.wp.com/www.opindia.com/wp-content/uploads/2021/08/bg_banner-1.jpg?resize=696%2C328&ssl=1",
      title: "Nava Rasa",
      description: "The Most Perfect Country on the Planet Switzerland",
    },
    {
      id: 5,
      image:
        "https://cdn.shopify.com/s/files/1/0969/9128/products/Narcos-Escobar-RiseOfTheCartels-NetflixTVShowPosterFanArt_7e247cd0-58fd-4339-a198-9a605e46308c.jpg?v=1589271664",
      title: "Narcos",
      description: "The Most Perfect Country on the Planet Switzerland",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71Lqlq3GlwL._AC_SL1500_.jpg",
      title: "The Queen's Gambit",
      description: "The Most Perfect Country on the Planet Switzerland",
    },
    {
      id: 7,
      image:
        "https://i0.wp.com/www.opindia.com/wp-content/uploads/2021/08/bg_banner-1.jpg?resize=696%2C328&ssl=1",
      title: "Nava Rasa",
      description: "The Most Perfect Country on the Planet Switzerland",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className={`${isNavOpen ? "ml-64" : "ml-20"} pt-20 bg-bg-blue text-white`}
    >
      <div className="p-6">
        <img className="px-3 w-full" src={banner} />
        <div className="my-6">
          <h1 style={{ fontSize: "28px" }} className="pl-3 font-bold mb-2">
            Featured videos
          </h1>
          <Carousel responsive={responsive}>
            {moviesList.map((movie) => (
              <div className="mx-3">
                <div style={{ height: "150px" }}>
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${movie.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
                <p className="text-white">{movie.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="my-6">
          <h1 style={{ fontSize: "28px" }} className="pl-3 font-bold mb-2">
            Trending
          </h1>
          <Carousel responsive={responsive}>
            {moviesList.map((movie) => (
              <div className="mx-3">
                <div style={{ height: "150px" }}>
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${movie.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
                <p className="text-white">{movie.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <img className="px-3  w-full" src={banner} />
        <div className="my-6">
          <h1 style={{ fontSize: "28px" }} className="pl-3 font-bold mb-2">
            New releases
          </h1>
          <Carousel responsive={responsive}>
            {moviesList.map((movie) => (
              <div className="mx-3">
                <div style={{ height: "150px" }}>
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${movie.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
                <p className="text-white">{movie.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="my-6">
          <h1 style={{ fontSize: "28px" }} className="pl-3 font-bold mb-2">
            Action
          </h1>
          <Carousel responsive={responsive}>
            {moviesList.map((movie) => (
              <div className="mx-3">
                <div style={{ height: "150px" }}>
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${movie.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
                <p className="text-white">{movie.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Home;
