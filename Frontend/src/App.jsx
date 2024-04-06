import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, Landing } from "./routes";
import SignUp from "./components/authentication/Signup/Signup";
import Login from "./components/authentication/Login/Login";

export default function App() {
	return (
		<section className="containers">
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
    path: "signUp",
    element: <SignUp/>,
  },
	{
    path: "login",
    element: <Login/>,
  },
	{
		path: "*",
		element: <Error />,
	},
]);
