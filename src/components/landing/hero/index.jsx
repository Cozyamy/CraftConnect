/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export function Hero() {
	return (
		<Fragment>
			<section className="main__hero flexbox">
				<div className="main__hero-left">
					<h1>
						<span>Welcome to CraftConnect</span>
						<br />
						Hire the best <span>Artisans</span> for any job
					</h1>

					<p>
						Skip the endless searching and stressful quotes. Book
						with CraftConnect's user-friendly platform and enjoy
						transparent pricing every step of the way.
					</p>

					<div className="flexbox">
						<Link
							to="/"
							className="flexbox"
						>
							<span>Hire an Artisan</span>
						</Link>
						<Link
							to="/"
							className="flexbox"
						>
							<span>Earn as an artisan</span>
						</Link>
					</div>
				</div>

				<div className="main__hero-right flex-box">
					<img
						src="/hero-image.jpeg"
						alt=""
					/>
				</div>
			</section>
		</Fragment>
	);
}
