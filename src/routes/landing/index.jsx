import { Fragment } from "react";
import { Footer, Hero, NavBar, WhatAndWhy } from "../../components";
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
						{/* <WhatAndWhy /> */}
					</Fragment>
				</div>
			</main>

			<Fragment>
				<Footer />
			</Fragment>
		</>
	);
}
