import { Fragment } from "react";
import { FACEBOOK, LINKEDIN, TWITTER } from "../../../assets/icons";
import { Logo } from "../nav-bar";
import "./index.css";

export function Footer() {
	return (
		<Fragment>
			<footer className="footer flexbox">
				<div className="footer__wrapper flexbox">
					<div className="footer__links-wrapper flexbox">
						<ul className="footer__links-left flexbox">
							<li className="footer__logo">
								<Logo image="/logo_2.png" />
							</li>
							<li>08000000001</li>
							<li>4517 Washington Ave. Enugu</li>
							<li>craftconnect@example.com</li>
						</ul>

						<aside className="flexbox">
							<ul className="footer__links-center flexbox">
								<li>Quicklinks</li>
								<li>About us</li>
								<li>Contact us</li>
								<li>Privacy Policy</li>
							</ul>

							<ul className="footer__links-right">
								<li>Connect</li>
								<ul className="flexbox">
									<li>
										<i className="flexbox">
											<FACEBOOK />
										</i>
									</li>
									<li>
										<i className="flexbox">
											<TWITTER />
										</i>
									</li>
									<li>
										<i className="flexbox">
											<LINKEDIN />
										</i>
									</li>
								</ul>
							</ul>
						</aside>
					</div>

					<form className="footer__form flexbox">
						<input
							type="text"
							placeholder="Yourmail@mail.com"
						/>
						<button type="submit">submit</button>
					</form>
				</div>
			</footer>
		</Fragment>
	);
}
