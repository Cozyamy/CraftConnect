import { useState, useEffect } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { Oauth } from "../../firebase/Firebaseconfig";

const Login = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
    loginError: false,
    successMessage: false,
    userNotFound: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showGoogleSignInModal, setShowGoogleSignInModal] = useState(false);
  const [user, setUser] = useState(null);
  const [hasReloadedOnce, setHasReloadedOnce] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading state of the Sign In button

  const handleLogInClick = () => {
    navigate("/signup");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (hasReloadedOnce) {
      return;
    }
    
    if (user) {
      setHasReloadedOnce(true);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }, [user, hasReloadedOnce]);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|net|org|edu|gov|mil|biz|info)$/i;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setFormErrors({
        email: !email,
        password: !password,
        loginError: false,
        successMessage: false,
        userNotFound: false,
      });
      return;
    }

    if (!validateEmail(email)) {
      setFormErrors({
        email: true,
        password: false,
        loginError: false,
        successMessage: false,
        userNotFound: false,
      });
      return;
    }

    setIsLoading(true); // Set loading state to true when the Sign In button is clicked

    try {
      await signInWithEmailAndPassword(Oauth, email, password);
      setFormErrors({
        email: false,
        password: false,
        loginError: false,
        successMessage: true,
        userNotFound: false,
      });
      setUser({ email });
      setShowGoogleSignInModal(true);
      setTimeout(() => {
        setShowGoogleSignInModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error signing in:", error.message);
      if (error.code === "auth/wrong-password") {
        setFormErrors({
          email: false,
          password: true,
          loginError: true,
          successMessage: false,
          userNotFound: false,
        });
      } else if (error.code === "auth/user-not-found") {
        setFormErrors({
          email: true,
          password: false,
          loginError: true,
          successMessage: false,
          userNotFound: true,
        });
      } else {
        setFormErrors({
          email: false,
          password: false,
          loginError: true,
          successMessage: false,
          userNotFound: false,
        });
      }
    } finally {
      setIsLoading(false); // Reset loading state after form submission
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(Oauth, new GoogleAuthProvider());
      console.log("Signed in with Google:", result.user);
      setUser(result.user);
      setShowGoogleSignInModal(true);
      setTimeout(() => {
        setShowGoogleSignInModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(Oauth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-white">
        <div className="w-full sm:max-w-[42rem]">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-2 text-black">Welcome Back</h1>
            <p className="text-gray-600 mb-4">Please enter your login details below</p>
          </div>
          <form
            className="border border-2 p-8 rounded-lg w-full"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-[400] mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className={`border-gray-300 border w-full px-3 py-2 rounded-lg focus:outline-none ${
                  formErrors.email ? "border-red-500" : formErrors.successMessage ? "border-green-500" : "focus:border-blue-500"
                }`}
              />
              {formErrors.email && <small className="text-red-500">Invalid email address</small>}
              {formErrors.userNotFound && <small className="text-red-500">Email not found</small>}
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-600 font-[400] mb-2">Password</label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`border-gray-300 border w-full px-3 py-2 rounded-lg pr-10 focus:outline-none ${
                    formErrors.password ? "border-red-500" : "focus:border-blue-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 flex items-center pr-3"
                >
                  {showPassword ? <CiUnlock className="h-6 w-6 text-gray-400 cursor-pointer" /> : <CiLock className="h-6 w-6 text-gray-400 cursor-pointer" />}
                </button>
              </div>
              {formErrors.password && <small className="text-red-500">Wrong password</small>}
            </div>

            <div className="mb-4 text-right">
              <button
                type="button"
                className="text-[#0F6C96] text-sm font-[400] hover:underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="relative bg-[#0F6C96] text-white font-[400] py-2 px-4 rounded-lg mb-4 w-full border-solid border-[1px] hover:bg-white hover:border-[#0F6C96] hover:text-[#0F6C96]"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                </div>
              )}
              Sign In
            </button>
            
            <button
              className="flex items-center justify-center bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-lg w-full"
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google Logo"
                className="h-6 w-6 mr-2"
              />
              Sign in with Google
            </button>

            {formErrors.loginError && <small className="text-red-500">Incorrect email or password</small>}
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

          {showGoogleSignInModal && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Signed in successfully!</h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">You are already signed in. Would you like to sign out?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
