import { Fragment } from "react";
import { FACEBOOK, LINKEDIN, TWITTER } from "../../../assets/icons";
import footer_logo from "/logo_2.png";
import "./index.css";

export function Footer() {
  return (
    <Fragment>
      <footer className="footer bg-[#0B5171] text-white">
        <div className="footer__links-wrapper flex flex-col lg:flex-row items-start justify-between py-16 mx-auto my-0 lg:max-w-[80%] max-w-[90%] sm-max:gap-8 md:gap-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-start">
            <ul className="footer__links-left flex flex-col gap-4 text-[14px]">
              <li className="footer__logo mb-2 max-w-40">
                <img src={footer_logo} alt="" />
              </li>
              <li>08000000001</li>
              <li>4517 Washington Ave. Enugu</li>
              <li>craftconnect@example.com</li>
            </ul>

            <aside className="flex flex-row gap-[7rem] items-start sm-max:gap-[4rem] ">
              <ul className="footer__links-center flex flex-col gap-5">
                <li className="text-[20px">Quicklinks</li>
                <li className="mb-1 text-[14px] cursor-pointer hover:underline">
                  About us
                </li>
                <li className="text-[14px] cursor-pointer hover:underline">
                  Contact us
                </li>
                <li className="mt-0  text-[14px] cursor-pointer hover:underline">
                  Privacy Policy
                </li>
              </ul>

              <ul className="footer__links-right flex flex-col gap-5">
                <li>Connect</li>
                <ul className="flex flex-row gap-6">
                  <li>
                    <i className="max-w-4 cursor-pointer">
                      <FACEBOOK />
                    </i>
                  </li>
                  <li>
                    <i className="max-w-4 cursor-pointer">
                      <TWITTER />
                    </i>
                  </li>
                  <li>
                    <i className="max-w-4 cursor-pointer">
                      <LINKEDIN />
                    </i>
                  </li>
                </ul>
              </ul>
            </aside>
          </div>
          <form className="lg:w-[25rem] relative mt-[2rem] w-[20rem] md:w-[25rem]">
            <div className="relative">
              <span className="text-white absolute top-[-2rem] left-0">
                Newsletter
              </span>
              <input
                type="text"
                placeholder="Enter email"
                className="border border-white bg-opacity-15 rounded-xl bg-transparent outline-none w-[80%] px-2 py-[1rem]"
              />
              <button
                type="submit"
                className="text-black absolute bg-white py-[1rem] px-10 rounded-r-lg top-0 right-0 bottom-0 hover:text-[#0B5171] hover:bg-[#e3e3e3] transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </footer>
    </Fragment>
  );
}
