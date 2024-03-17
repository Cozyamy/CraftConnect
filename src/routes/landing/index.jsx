import { Fragment } from "react";
import { Footer, Hero, NavBar, SectionWhy, WhatsCraft, Category, Testimonials } from "../../components";
import "./index.css";

export function Landing() {
	return (
		<>
			<Fragment>
				<NavBar />
			</Fragment>

			<main className="main">
				<div className="main__wrapper">
					<Fragment>
						<Hero />
					</Fragment>

					<Fragment>
						<WhatsCraft />
					</Fragment>

					<Fragment>
						<SectionWhy />
					</Fragment>

					<Fragment>
						{<Category /> }
					</Fragment>

					<Fragment>
						<Testimonials />
					</Fragment>
				</div>
			</main>

			<Fragment>
				<Footer />
			</Fragment>
		</>
	);
}
