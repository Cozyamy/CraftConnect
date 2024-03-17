import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, Landing } from "./routes";

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
	{
		path: "*",
		element: <Error />,
	},
]);
