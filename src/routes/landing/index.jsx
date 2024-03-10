import { Hero, NavBar } from "../../components";
import "./index.css";

export function Landing() {
	return (
		<>
			<NavBar />

			<main className="main">
				<div className="main__wrapper">
					<Hero />
				</div>
			</main>
		</>
	);
}
