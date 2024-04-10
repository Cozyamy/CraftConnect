import styles from "./category.module.css";

export function Category() {
  return (
    <div className={`${styles.category_box} bg-[#0F6C96] max-w-full`}>
      <div className={`${styles.box_header} py-12 w-10/12 my-0 mx-auto`}>
        <div className="flex flex-col items-start">
          <div className={styles.title}>
            <h2 className="text-[#f1f1f1] mb-4 text-2xl font-semibold">
              Browse <span className="text-[#1A1A1A]">artisan</span> by category
            </h2>
            <p className="text-[#f1f1f1]">
              Browse our curated categories to find skilled artisans ready to
              bring your vision to life. Whether you are looking for a
              carpenter, painter, electrician, or more, we have the perfect
              match for your project.
            </p>
          </div>
          <div
            className={`${styles.boxes} flex md:flex-wrap xl:flex-nowrap flex-wrap flex-row items-center justify-evenly mt-5 max-w-full gap-7`}
          >
            <div className="flex flex-col items-center gap-1">
              <div
                className={`${styles.catBox} rounded-2xl cursor-pointer border-2 border-white border-solid py-8 px-12`}
              >
                <img
                  src="./assets/Hammer.png"
                  alt="hammer"
                  className="w-full object-contain hover:origin-center hover:rotate-180"
                />
              </div>
              <p className="font-semibold text-white text-lg">Carpenters</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`${styles.catBox} rounded-2xl cursor-pointer border-2 border-white border-solid py-8 px-12`}
              >
                <img
                  src="./assets/Brush.png"
                  alt="brush"
                  className="w-full object-contain hover:origin-center hover:rotate-180"
                />
              </div>
              <p className="font-semibold text-white text-lg">Painters</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`${styles.catBox} rounded-2xl cursor-pointer border-2 border-white border-solid py-8 px-12`}
              >
                <img
                  src="./assets/Sewing.png"
                  alt="Sewing"
                  className="w-full object-contain hover:origin-center hover:rotate-180"
                />
              </div>
              <p className="font-semibold text-white text-lg">
                Fashion Designers
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`${styles.catBox} rounded-2xl cursor-pointer border-2 border-white border-solid py-8 px-12`}
              >
                <img
                  src="./assets/Car_service.png"
                  alt="Car_service"
                  className="w-full object-contain hover:origin-center hover:rotate-180"
                />
              </div>
              <p className="font-semibold text-white text-lg">Mechanics</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`${styles.catBox} rounded-2xl cursor-pointer border-2 border-white border-solid py-8 px-12`}
              >
                <img
                  src="./assets/Plumber.png"
                  alt="Plumber"
                  className="w-full object-contain hover:origin-center hover:rotate-180"
                />
              </div>
              <p className="font-semibold text-white text-lg">Plumbers</p>
            </div>
          </div>
          <div
            className={`${styles.see_more} flex items-center justify-center mt-10 gap-2 cursor-pointer rounded-lg py-2 px-4 bg-white hover:scale-110 sm:self-start self-center`}
          >
            <a
              href="/signup"
              className="font-semibold text-xl text-[#0F6C96] flex items-center"
            >
              See more
            </a>
            <div className="max-w-6 hover:translate-x-2.5">
              <img
                src="./right arrow.svg"
                alt="Arrow"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
