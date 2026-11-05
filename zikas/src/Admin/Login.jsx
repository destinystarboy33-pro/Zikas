
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://zikas.onrender.com/auth/login",
        formData
      );

      if (response.data.status) {
        localStorage.setItem("adminToken", response.data.token);
        localStorage.setItem(
          "admin",
          JSON.stringify(response.data.admin)
        );

        navigate("/dashboard");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-black text-white flex-col justify-between p-14">

        <Link to="/" className="text-4xl font-black tracking-widest">
          ZIKAS<span className="text-orange-500">.</span>
        </Link>

        <div>
          <p className="text-orange-500 uppercase tracking-[5px] text-sm font-bold mb-6">
            Administration Portal
          </p>

          <h1 className="text-6xl xl:text-7xl font-black uppercase leading-tight tracking-tight">
            Manage
            <br />
            Your
            <br />
            <span className="text-orange-500">Brand.</span>
          </h1>

          <p className="text-gray-400 mt-8 max-w-md leading-7">
            Welcome to the ZIKAS administration portal.
            Manage your products, monitor your store and
            keep everything running smoothly.
          </p>
        </div>

        <p className="text-gray-500 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} ZIKAS. ALL RIGHTS RESERVED.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* MOBILE LOGO */}
          <Link
            to="/"
            className="lg:hidden block text-3xl font-black tracking-widest mb-16 text-black"
          >
            ZIKAS<span className="text-orange-500">.</span>
          </Link>

          <div className="mb-10">

            <p className="text-orange-500 text-xs font-bold tracking-[4px] uppercase mb-4">
              Admin Access
            </p>

            <h2 className="text-4xl font-black uppercase tracking-tight text-black">
              Welcome Back
            </h2>

            <p className="text-gray-500 text-sm mt-3">
              Enter your credentials to access your dashboard.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-black">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 px-5 py-4 text-sm outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-black">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full border border-gray-300 px-5 py-4 pr-20 text-sm outline-none focus:border-orange-500 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase text-gray-500 hover:text-orange-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-sm">
                {errorMessage}
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-orange-500 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          <div className="border-t border-gray-200 mt-12 pt-6">
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
              Restricted Access · Authorized Personnel Only
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;
