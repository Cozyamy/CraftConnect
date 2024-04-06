import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
    loginError: false,
    successMessage: false,
  });

  const handleLogInClick = () => {
    navigate("/signup");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|net|org|edu|gov|mil|biz|info)$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (validateEmail(email)) {
      setFormErrors({
        email: false,
        password: false,
        loginError: false,
        successMessage: true,
      });
      setTimeout(() => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          successMessage: false,
        }));
        e.target.reset(); // Clear input fields after success
      }, 3000); // Disappear success message after 3 seconds
    } else {
      setFormErrors({
        email: true,
        password: false,
        loginError: false,
        successMessage: false,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-white">
        <div className="w-screen sm:max-w-[42rem]">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-2 text-black">Welcome Back</h1>
            <p className="text-gray-600 mb-4">
              Please enter your login details below
            </p>
          </div>
          <form
            className="border border:2 p-8 rounded-lg  w-full"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-[400] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className={`border-gray-300 border w-full px-3 py-2 rounded-lg focus:outline-none ${
                  formErrors.email
                    ? "border-red-500"
                    : formErrors.successMessage
                    ? "border-green-500"
                    : "focus:border-blue-500"
                }`}
              />
              {formErrors.email && (
                <small className="text-red-500">Invalid email address</small>
              )}
              {formErrors.successMessage && (
                <small className="text-green-500">Email is valid</small>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-[400] mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`border-gray-300 border w-full px-3 py-2 rounded-lg pr-10 focus:outline-none ${
                    formErrors.password
                      ? "border-red-500"
                      : "focus:border-blue-500"
                  }`}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <CiLock className="h-6 w-6 text-gray-400" />
                </span>
                <button
                  type="button"
                  className="text-[#0F6C96] font-[400] absolute inset-y-11 right-2"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#0F6C96] text-white font-[400] py-2 px-4 rounded-lg mb-4 w-full mt-[2rem] border-solid border-[1px] hover:bg-white hover:border-[#0F6C96] hover:text-[#0F6C96]"
            >
              Sign In
            </button>
            {formErrors.loginError && (
              <small className="text-red-500">Login unsuccessful</small>
            )}
            <div className="flex justify-center items-center mb-4">
              <p className="text-gray-700 mr-2">Don't have an Account?</p>
              <button
                type="button"
                className="text-[#0F6C96] font-[400] py-2 px-0 rounded-lg"
                style={{ borderColor: "#0F6C96" }}
                onClick={handleLogInClick}
              >
                Sign up
              </button>
            </div>
            <button
              className="border border-transparent hover:border-blue-500 text-[#0F6C96] font-[400] py-2 px-4 rounded-lg hover:bg-[#0F6C96] hover:text-white"
              style={{ borderColor: "#0F6C96" }}
              onClick={handleHomeClick}
            >
              Back to Home
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
