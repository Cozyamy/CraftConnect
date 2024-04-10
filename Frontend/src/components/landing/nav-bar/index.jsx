import { NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { HiOutlineBars4 } from "react-icons/hi2";
import logoheader from "/Logo-header.svg";
import "./index.css";

export function NavBar({ showLinks = true, showLogoutButton = false}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Services", to: "/services" },
    { text: "Contact", to: "/contact" },
  ];

  return (
    <Fragment>
      <header className="header sticky-header sticky top-0 bg-white shadow-[0_12px_40px_0_rgba(31,29,29,0.05)] z-[1000]">
        <div className="header__wrapper flex flex-row py-4 mx-auto my-0 lg:max-w-[90%] max-w-[90%] justify-between items-center">
          <div className="sm-max:w-[150px] md-max:w-[150px]">
            <a href="/"><img src={logoheader} alt="header_logo" className="sm-max:w-full" /></a>
          </div>
          {showLinks && (
            <ul
              className={`flex items-center justify-center gap-8 sm-max:absolute sm-max:bg-white sm-max:shadow ${
                isMenuOpen ? "sm-max:top-[4rem]" : "sm-max:top-[-100rem]"
              } sm-max:left-0 sm-max:right-0 sm-max:w-full sm-max:flex sm-max:flex-col sm-max:items-start sm-max:gap-4 sm-max:px-4 sm-max:py-8 transition-all duration-300 md-max:gap`}
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="links text-[18px] hover:text-[#1287BB]"
                >
                  <NavLink
                    to={link.to}
                    style={{
                      color:
                        window.location.pathname === link.to
                          ? "#1287BB"
                          : "black",
                    }}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
              <div className="sign flex gap-2 lg:hidden md:hidden sm-max:flex">
                <CtaBtn text="Sign Up" to="/signup" />
                <CtaBtn text="Login" to="/login" />
              </div>
            </ul>
          )}

          {showLinks && (
            <div className="flex gap-2 sm-max:hidden">
              <CtaBtn text="Sign Up" to="/signup" />
              <CtaBtn text="Login" to="/login" />
            </div>
          )}

          {showLogoutButton &&(
            <div className="flex gap-2">
            <CtaBtn text="Log Out" to="/" />
          </div>
          )}

          {showLinks && (
            <div
              className="navBurger text-2xl cursor-pointer bg-[#efecec] shadow p-1 rounded lg:hidden"
              onClick={toggleClick}
            >
              <HiOutlineBars4 />
            </div>
          )}
        </div>
      </header>
    </Fragment>
  );
}

function CtaBtn({ text, to }) {
  return (
    <Fragment>
      <NavLink
        to={to}
        className="border:solid border-2 border-[#1287BB] text-white text-[18px] bg-[#1287BB] rounded-lg p-3 font-medium hover:bg-transparent hover:text-[#1287BB]"
      >
        <span>{text}</span>
      </NavLink>
    </Fragment>
  );
}

export default NavBar;
