import { useState, useEffect } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Oauth } from "../../firebase/Firebaseconfig";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

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

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading state of the Next button

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Oauth, (user) => {
      setIsSignedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message and border color when the user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: false });
    }
  };

  const handleSignInClick = () => {
    navigate("/logIn");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid =
      Object.values(formData).every((value) => value.trim() !== "") &&
      validateEmail(formData.email) &&
      formData.password.length >= 6;
    if (isFormValid) {
      setIsLoading(true); // Set loading state to true when the Next button is clicked
      try {
        await signInWithEmail(); // Call signInWithEmail here
        console.log("User signed up successfully");
        navigate("/category");
        // Clear form errors when the form is submitted successfully
        clearFormErrors();
        // Clear form fields
        clearFormData();
        setShowModal(true); // Show success modal
        setTimeout(() => {
          setShowModal(false);
        }, 3000); // Hide modal after 3 seconds
      } catch (error) {
        console.error("Error signing up:", error.message);
      } finally {
        setIsLoading(false); // Reset loading state after form submission
      }
    } else {
      updateFormErrors();
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // SignIn Firebase with Email/Password
  const signInWithEmail = async () => {
    await createUserWithEmailAndPassword(
      Oauth,
      formData.email,
      formData.password
    );
  };

  // Clear form errors
  const clearFormErrors = () => {
    setFormErrors({
      fullname: false,
      email: false,
      phone: false,
      password: false,
    });
  };

  // Clear form data
  const clearFormData = () => {
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  // Update form errors based on input validation
  const updateFormErrors = () => {
    const updatedFormErrors = {};
    for (const key in formData) {
      updatedFormErrors[key] = formData[key].trim() === "";
    }
    updatedFormErrors.email = !validateEmail(formData.email);
    updatedFormErrors.password = formData.password.length < 6;
    setFormErrors(updatedFormErrors);
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(Oauth, provider);
      const user = result.user;
      console.log("User signed in with Google:", user);
      // Handle redirection or additional logic after successful sign-in
      setShouldReload(true);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (isSignedIn && shouldReload) {
      setShowModal(true);
      timeoutId = setTimeout(() => {
        setShowModal(false);
        window.location.reload(); // Refresh the page
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [isSignedIn, shouldReload]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-full bg-white">
        <div className="w-screen sm:max-w-[42rem]">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-2 text-black">
              Create Your Account
            </h1>
            <p className="text-gray-600 mb-4">
              Please enter your details to create your account
            </p>
          </div>
          <form
            className="border border-2 p-8 rounded-lg  w-full"
            onSubmit={handleSubmit}
          >
            {/* Form fields */}
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-600 font-[400] mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                className={`border w-full px-3 py-2 rounded-lg focus:outline-none ${
                  formErrors.fullname
                    ? "border-red-500"
                    : formData.fullname.trim()
                    ? "border-green-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </div>
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
                className={`border w-full px-3 py-2 rounded-lg focus:outline-none ${
                  formErrors.email
                    ? "border-red-500"
                    : formData.email.trim()
                    ? "border-green-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <small className="text-red-500">
                  Please enter a valid email address
                </small>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-600 font-[400] mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className={`border w-full px-3 py-2 rounded-lg focus:outline-none ${
                  formErrors.phone
                    ? "border-red-500"
                    : formData.phone.trim()
                    ? "border-green-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
                value={formData.phone}
                onChange={handleInputChange}
              />
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`border w-full px-3 py-2 rounded-lg pr-10 focus:outline-none ${
                    formErrors.password
                      ? "border-red-500"
                      : formData.password.length >= 6
                      ? "border-green-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {showPassword ? (
                    <CiUnlock className="h-6 w-6 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                  ) : (
                    <CiLock className="h-6 w-6 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                  )}
                </span>
              </div>
              {formErrors.password && (
                <small className="text-red-500">
                  Password must be at least 6 characters
                </small>
              )}
            </div>
            {/* Next button with loading spinner animation */}
            <button
              type="submit"
              className="relative bg-[#0f6c96] text-white font-[400] py-2 mt-4 px-4 rounded-lg mb-4 w-full border-solid border-[1px] hover:bg-white hover:border-[#0F6C96] hover:text-[#0F6C96]"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                </div>
              )}
              Next
            </button>
            {/* Google Sign-In button */}
            <button
              className="flex items-center justify-center bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-lg w-full"
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google Logo"
                className="h-6 w-6 mr-2"
              />
              Sign Up with Google
            </button>
            {/* Sign in link */}
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
            {/* Back to Home button */}
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
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg font-semibold mb-2">Account created successfully</p>
            <div className="flex items-center justify-center text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
