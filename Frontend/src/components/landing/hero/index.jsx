import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/hero1.svg", "/hero2.svg", "/hero3.svg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Fragment>
      <section className="main__hero bg-[#F6FBFE]">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 mx-auto my-0 lg:max-w-[90%] max-w-[90%] lg:py-24 py-12 justify-between items-center">
          <div className="main__hero-left max-w-3xl flex flex-col lg:gap-10 gap-4">
            <h1 className=" font-bold lg:text-4xl text-xl text-[#333131] lg:text-left text-center">
              <span className="text-[#0F6C96]">Welcome to CraftConnect</span>
              <br/>
              Hire the best <span className="text-[#0F6C96]">Artisans</span> for
              any job
            </h1>

            <p className="text-[#333131] font-medium lg:text-xl text-base lg:text-left text-center ">
              Skip the endless searching and stressful quotes. Book with
              CraftConnect&apos;s user-friendly platform and enjoy transparent
              pricing every step of the way.
            </p>

            <div className="flex flex-row lg:gap-10 gap-2 self-center lg:self-start">
              <Link
                to="/"
                className="bg-[#1287BB] text-white lg:rounded-xl rounded-lg font-medium lg:text-2xl text-sm lg:py-6 py-2 lg:px-12 px-2"
              >
                <span>Hire an Artisan</span>
              </Link>
              <Link
                to="/"
                className="border-2 border-[#1287BB] text-[#1287BB] rounded-xl font-medium lg:text-2xl text-sm lg:py-6 py-2 lg:px-8 px-4"
              >
                <span>Earn as an artisan</span>
              </Link>
            </div>
          </div>

          <div className="main__hero-right xl:max-w-sm max-w-full">
            <img
              src={images[currentImageIndex]}
              alt=""
              className="border-2 border-[#1287BB] rounded-xl max-w-full ease-in-out transition-transform duration-700 fade_style"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
