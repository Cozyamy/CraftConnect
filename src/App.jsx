import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing } from "./routes";

export default function App() {
	return (
		<section className="container">
			<RouterProvider router={router} />
		</section>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
	},
]);
