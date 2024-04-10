import React, { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import categoryData from "./CategoryData";
import { Footer, NavBar } from "../landing";

const Morecategory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArtisans, setFilteredArtisans] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(10);
  const [activeIndex, setActiveIndex] = useState(null);

  const updateVisibleCategories = () => {
    if (window.innerWidth < 338) {
      setVisibleCategories(1);
    } else if (window.innerWidth < 468) {
      setVisibleCategories(2);
    } else if (window.innerWidth < 664) {
      setVisibleCategories(4);
    } else if (window.innerWidth < 964) {
      setVisibleCategories(5);
    } else if (window.innerWidth < 1130) {
      setVisibleCategories(7);
    } else if (window.innerWidth < 1300) {
      setVisibleCategories(8);
    } else {
      setVisibleCategories(12);
    }
  };

  useEffect(() => {
    updateVisibleCategories();
    window.addEventListener("resize", updateVisibleCategories);
    return () => {
      window.removeEventListener("resize", updateVisibleCategories);
    };
  }, []);

  useEffect(() => {
    // Automatically slide the slider to the selected category
    if (selectedCategory !== null) {
      const selectedIndex = categoryData.findIndex((category) =>
        category.name.toLowerCase().includes(selectedCategory.toLowerCase())
      );
      if (selectedIndex !== -1) {
        const newIndex = Math.max(0, selectedIndex - visibleCategories + 1);
        setStartIndex(newIndex);
      }
    }
  }, [selectedCategory, visibleCategories]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filtered = categoryData.filter((artisan) =>
      artisan.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArtisans(filtered);
    setSelectedCategory(null);
    setActiveIndex(null);
    // Check if the searched category exists in the filtered list
    const searchedCategory = categoryData.find((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchedCategory) {
      setSelectedCategory(searchedCategory.name);
    }
  };

  const handleCategoryClick = (category, idx) => {
    const filtered = categoryData.filter((artisan) =>
      artisan.name.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredArtisans(filtered);
    setSelectedCategory(category);
    setActiveIndex(idx);
  };

  const handleShowAll = () => {
    setFilteredArtisans(categoryData);
    setSelectedCategory(null);
    setActiveIndex(null);
  };

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
    setActiveIndex(null); // Reset active index when navigating
  };

  const handleNextClick = () => {
    setStartIndex(
      Math.min(startIndex + 1, categoryData.length - visibleCategories)
    );
    setActiveIndex(null); // Reset active index when navigating
  };

  return (
    <>
      <div>
        <NavBar showLinks={false} showLogoutButton={true} />
        <div className="pt-20 mb-8">
          <div className="fixed top-[85px] left-0 right-0 z-10 bg-white">
            <div className="container mx-auto py-4 px-6">
              <div className="flex items-center justify-between">
                <div>
                  <input
                    type="text"
                    placeholder="Search Artisan"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="border border-gray-300 rounded-md p-2 outline-none"
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-[#1287BB] text-white px-4 py-2 rounded-md ml-2 transition-opacity duration-300 hover:opacity-90"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-[-1.5rem] sticky top-[120px]">
            <hr className="my-4 border-t-2 border-gray-300 w-full" />
            <div className="flex justify-center mt-4">
              <button
                onClick={handlePrevClick}
                className="flex items-center justify-center w-8 h-8 bg-[#1287BB] text-white rounded-full mr-2 mt-5 transition-opacity duration-300 hover:opacity-90"
                disabled={startIndex === 0}
              >
                <IoChevronBackOutline />
              </button>
              <div className="flex flex-wrap gap-2 md:gap-4 sm:gap-1 justify-center bg-white z-10 py-4 overflow-x-hidden">
                <div
                  className={`cursor-pointer bg-gray-200 px-4 py-2 rounded-md ${
                    selectedCategory === null
                      ? "bg-[#1287BB] text-[#1287BB]"
                      : ""
                  } transition-colors duration-300`}
                  onClick={handleShowAll}
                >
                  All
                </div>
                {categoryData
                  .slice(startIndex, startIndex + visibleCategories)
                  .map((category, idx) => (
                    <div
                      key={idx}
                      className={`cursor-pointer bg-gray-200 px-4 py-2 rounded-md ${
                        selectedCategory === category.name ||
                        activeIndex === idx
                          ? "bg-[#1287BB] text-[#1287BB]"
                          : ""
                      } transition-colors duration-300`}
                      onClick={() => handleCategoryClick(category.name, idx)}
                    >
                      {category.name}
                    </div>
                  ))}
              </div>
              <button
                onClick={handleNextClick}
                className="flex items-center justify-center w-8 h-8 bg-[#1287BB] text-white rounded-full ml-2 mt-5 transition-opacity duration-300 hover:opacity-90"
                disabled={startIndex >= categoryData.length - visibleCategories}
              >
                <IoChevronForwardOutline />
              </button>
            </div>
            <hr className="my-4 border-b-2 border-gray-300 w-full" />
            <div className="flex items-center justify-center flex-wrap gap-6">
              {filteredArtisans.map((artisan, idx) => (
                <div key={idx} className="relative">
                  <div className="w-[350px] relative sm-max:w-[280px]">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="rounded-lg"
                    />
                    <div className="absolute top-0 left-0 bg-black bg-opacity-60 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg p-4 text-center ">
                      <h3 className="text-xl font-semibold text-white">{artisan.name}</h3>
                      <p className="text-white sm-max:text-[14px]">{artisan.description}</p>
                      <button
                        type="button"
                        className="bg-[#1287BB] p-2 rounded text-white mt-[1.5rem] hover:opacity-80"
                      >
                        Connect to Artisan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Morecategory;
