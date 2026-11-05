
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const Navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {

        const URL = "https://zikas.onrender.com/auth/register"

        const response = await axios.post(URL, formData)

        
      const data = response.data;
    //   Cookies.set("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      Navigate("/dashboard")

        console.log(response)
      // Backend registration will be connected here.

      console.log({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

    } catch (error) {
    //   setError("Something went wrong. Please try again.");
       setError(
        error.response?.data?.message
      );

      console.log(error.response)
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-md bg-white shadow-xl">

        {/* HEADER */}
        <div className="bg-black px-8 py-8 text-center">

          <Link to="/" className="text-4xl font-black text-white tracking-tighter">
            ZIKAS<span className="text-orange-500">.</span>
          </Link>

          <p className="text-gray-400 text-sm mt-3">
            ADMINISTRATION PORTAL
          </p>

        </div>

        {/* FORM */}
        <div className="px-7 py-9 md:px-10">

          <div className="mb-8">

            <p className="text-orange-500 text-xs font-bold uppercase tracking-[3px] mb-3">
              Create Account
            </p>

            <h1 className="text-3xl font-black text-gray-900">
              Admin Registration
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Create your ZIKAS administrator account.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* FULL NAME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-200 px-4 py-3.5 outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                autoComplete="off"
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-200 px-4 py-3.5 outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                   autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  className="w-full border border-gray-200 px-4 py-3.5 pr-12 outline-none focus:border-orange-500 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label="Toggle password visibility"
                >
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
                </button>

              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full border border-gray-200 px-4 py-3.5 pr-12 outline-none focus:border-orange-500 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label="Toggle confirm password visibility"
                >
                  <i className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} />
                </button>

              </div>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 font-bold hover:bg-black transition duration-300"
            >
              CREATE ACCOUNT
              <i className="fa-solid fa-arrow-right ml-3" />
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{" "}
            <Link
              to="/admin/login"
              className="text-orange-500 font-bold hover:text-black transition"
            >
              Login
            </Link>
          </p>

        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-100 py-5 text-center">
          <p className="text-xs text-gray-400">
            ZIKAS ADMIN PORTAL
          </p>
        </div>

      </div>

    </main>
  );
};

export default Register;
