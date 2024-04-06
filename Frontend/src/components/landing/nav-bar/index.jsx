import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../../assets/data";
import "./index.css";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
	console.log("Toggling menu");
	setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <Fragment>
      <header className="header sticky-header sticky top-0 bg-transparent backdrop-blur shadow-[0_12px_40px_0_rgba(31,29,29,0.05)] z-[1000]">
        <div className="header__wrapper flex flex-row py-4 mx-auto my-0 lg:max-w-[90%] max-w-[90%] justify-between items-center">
          <Logo image={"/Logo-header.svg"} />

          <button
            className="header__menu-toggle lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <nav
            className={`header__navigation lg:flex flex-col lg:flex-row  ${
              isMenuOpen
                ? "flex absolute right-0 top-5 bg-[#fef7e5] overflow-hidden w-0 transition-all ease-in"
                : "hidden"
            }`}
          >
            <NavigationLinks closeMenu={() => setIsMenuOpen(false)} />
          </nav>

          <button
            className={`header__navigation lg:flex flex-row ${
              isMenuOpen
                ? "flex absolute right-0 top-5 bg-[#fef7e5] overflow-hidden w-0 transition-all ease-in"
                : "hidden"
            }`}
            onClick={() => {
              setIsMenuOpen(false); // Close the menu when the button is clicked
            }}
          >
            <CTA_Button />
          </button>
        </div>
      </header>
    </Fragment>
  );
}

export function Logo({ image }) {
  return (
    <Fragment>
      <Link to="/" className="header__logo lg:max-w-60 max-w-44">
        <img src={image} alt="craft_connect_logo" className="max-w-full" />
      </Link>
    </Fragment>
  );
}

function NavigationLinks({ closeMenu }) {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <Fragment>
      <ul className="flex flex-row text-[#1A1A1A] text-2xl gap-8 font-medium">
        {NAVIGATION_LINKS.map((link, index) => (
          <li key={index}>
            <NavLink to={link.href} onClick={handleClick}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

function CTA_Button() {
  return (
    <Fragment>
      <Link
        to="/signup"
        className="header__cta text-white bg-[#1287BB] rounded-lg p-3 text-2xl font-medium"
      >
        <span>Sign Up</span>
      </Link>
    </Fragment>
  );
}

Logo.propTypes = {
  image: PropTypes.string.isRequired,
};

NavigationLinks.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};
