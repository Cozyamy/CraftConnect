import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullname: false,
    email: false,
    phone: false,
    password: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message and border color when user starts typing
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleSignInClick = () => {
    navigate("/logIn");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid =
      Object.values(formData).every((value) => value.trim() !== "") &&
      validateEmail(formData.email) &&
      formData.password.length >= 6;
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Clear form errors when form is submitted successfully
      setFormErrors({
        fullname: false,
        email: false,
        phone: false,
        password: false,
      });
      // Clear form fields
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        password: "",
      });
    } else {
      const updatedFormErrors = {};
      for (const key in formData) {
        updatedFormErrors[key] = formData[key].trim() === "";
      }
      updatedFormErrors.email = !validateEmail(formData.email);
      updatedFormErrors.password = formData.password.length < 6;
      setFormErrors(updatedFormErrors);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-white">
        <div className="w-full sm:max-w-[42rem]">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-2 text-black">Create Your Account</h1>
            <p className="text-gray-600 mb-4">
              Please enter your details to create your account
            </p>
          </div>
          <form className="border border-2 p-8 rounded-lg  w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-600 font-[400] mb-2">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                className={`border w-full px-3 py-2 rounded-lg focus:outline-none ${formErrors.fullname ? 'border-red-500' : formData.fullname.trim() ? 'border-green-500' : 'border-gray-300 focus:border-blue-500'}`}
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-[400] mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className={`border w-full px-3 py-2 rounded-lg focus:outline-none ${formErrors.email ? 'border-red-500' : formData.email.trim() ? 'border-green-500' : 'border-gray-300 focus:border-blue-500'}`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <small className="text-red-500">Please enter a valid email address</small>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600 font-[400] mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className={`border w-full px-3 py-2 rounded-lg focus:outline-none ${formErrors.phone ? 'border-red-500' : formData.phone.trim() ? 'border-green-500' : 'border-gray-300 focus:border-blue-500'}`}
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 font-[400] mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`border w-full px-3 py-2 rounded-lg pr-10 focus:outline-none ${formErrors.password ? 'border-red-500' : formData.password.length >= 6 ? 'border-green-500' : 'border-gray-300 focus:border-blue-500'}`}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <CiLock className="h-6 w-6 text-gray-400" />
                </span>
              </div>
              {formErrors.password && (
                <small className="text-red-500">Password must be at least 6 characters</small>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#0f6c96] text-white font-[400] py-2 mt-4 px-4 rounded-lg mb-4 w-full border-solid border-[1px] hover:bg-white hover:border-[#0F6C96] hover:text-[#0F6C96]"
            >
              Next
            </button>
            <div className="flex justify-center items-center mb-4">
              <p className="text-gray-700 mr-2">Already have an Account?</p>
              <button
                type="button"
                className="text-[#0F6C96] font-[400] py-2 px-0 rounded-lg"
                style={{ borderColor: "#0F6C96" }}
                onClick={handleSignInClick}
              >
                Sign in
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

export default SignUp;
