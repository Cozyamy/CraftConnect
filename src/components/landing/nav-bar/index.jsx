import PropTypes from "prop-types";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../../assets/data";
import "./index.css";

export function NavBar() {
	return (
		<Fragment>
			<header className="header">
				<div className="header__wrapper flexbox">
					<Logo image={"/logo.png"} />

					<nav className="header__navigation flexbox">
						<NavigationLinks />
					</nav>

					<CTA_Button />
				</div>
			</header>
		</Fragment>
	);
}

export function Logo({ image }) {
	return (
		<Fragment>
			<Link
				to="/"
				className="header__logo flexbox"
			>
				<img
					src={image}
					alt="craft_connect_logo"
				/>
			</Link>
		</Fragment>
	);
}

function NavigationLinks() {
	let links;

	links = NAVIGATION_LINKS.map((link, index) => {
		const { title, href } = link;

		return (
			<Fragment key={index}>
				<li>
					<NavLink to={href}>{title}</NavLink>
				</li>
			</Fragment>
		);
	});

	return (
		<Fragment>
			<ul className="flexbox">{links}</ul>
		</Fragment>
	);
}

function CTA_Button() {
	return (
		<Fragment>
			<Link
				to="/signup"
				className="header__cta flexbox"
			>
				<span>Sign Up</span>
			</Link>
		</Fragment>
	);
}

Logo.propTypes = {
	image: PropTypes.string.isRequired,
};
