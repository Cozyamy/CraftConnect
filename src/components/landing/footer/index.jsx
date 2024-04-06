import { Fragment } from "react";
import { FACEBOOK, LINKEDIN, TWITTER } from "../../../assets/icons";
import { Logo } from "../nav-bar";
import "./index.css";

export function Footer() {
	return (
		<Fragment>
			<footer className="footer bg-[#0B5171] text-white">
					<div className="footer__links-wrapper flex flex-col lg:flex-row items-center justify-between py-16  mx-auto my-0 lg:max-w-[80%] max-w-[90%]">
						<div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
						<ul className="footer__links-left flex flex-col gap-4 text-xs">
							<li className="footer__logo mb-8 max-w-40">
								<Logo image="/logo_2.png" />
							</li>
							<li>08000000001</li>
							<li>4517 Washington Ave. Enugu</li>
							<li>craftconnect@example.com</li>
						</ul>

						<aside className="flex flex-row gap-12">
							<ul className="footer__links-center flex flex-col gap-5">
								<li>Quicklinks</li>
								<li className="mb-1 text-xs">About us</li>
								<li  className="text-xs">Contact us</li>
								<li className="mt-0 lg:mt-14 text-xs">Privacy Policy</li>
							</ul>

							<ul className="footer__links-right flex flex-col gap-5">
								<li>Connect</li>
								<ul className="flex flex-row gap-4">
									<li>
										<i className="max-w-4">
											<FACEBOOK />
										</i>
									</li>
									<li>
										<i className="max-w-4">
											<TWITTER />
										</i>
									</li>
									<li>
										<i className="max-w-4">
											<LINKEDIN />
										</i>
									</li>
								</ul>
							</ul>
						</aside>
						</div>
						<form className="footer__form border border-white bg-opacity-15 rounded-xl mt-10 lg:mt-0">
						<input
							type="text"
							placeholder="Yourmail@mail.com"
							className="bg-transparent pl-2 pr-10 outline-none"
						/>
						<button type="submit" className="text-black bg-white py-3.5 px-10 rounded-xl">submit</button>
					</form>
					</div>
			</footer>
		</Fragment>
	);
}
