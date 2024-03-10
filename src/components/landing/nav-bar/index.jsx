import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation_links } from "../../../assets/data";
import "./index.css";

export function NavBar() {
	return (
		<Fragment>
			<header className="header">
				<div className="header__wrapper flexbox">
					<Logo />

					<nav className="header__navigation flexbox">
						<NavigationLinks />
					</nav>

					<CTA_Button />
				</div>
			</header>
		</Fragment>
	);
}

function Logo() {
	return (
		<Fragment>
			<Link
				to="/"
				className="header__logo flexbox"
			>
				<img
					src="/logo.png"
					alt="craft_connect_logo"
				/>
			</Link>
		</Fragment>
	);
}

function NavigationLinks() {
	const links = navigation_links.map((link, index) => {
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
			<button className="header__cta">
				<span>Sign Up</span>
			</button>
		</Fragment>
	);
}
