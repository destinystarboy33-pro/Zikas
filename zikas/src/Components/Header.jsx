import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "New Arrival", path: "/NewArrival" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `relative text-sm font-semibold transition duration-300 hover:text-orange-500
    ${isActive ? "text-orange-500" : "text-gray-700"}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-black tracking-tighter text-black"
          >
            ZIKAS<span className="text-orange-500">.</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-5">

            <Link
              to="/search"
              aria-label="Search products"
              className="text-xl text-gray-800 hover:text-orange-500 transition"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </Link>

            <Link
              to="/collections"
              className="bg-black text-white px-7 py-3 text-sm font-bold hover:bg-orange-500 transition duration-300 rounded-2xl"
            >
              SHOP NOW
              <i className="fa-solid fa-arrow-right ml-3" />
            </Link>

          </div>

          {/* MOBILE ACTIONS */}
          <div className="lg:hidden flex items-center gap-5">

            <Link
              to="/search"
              onClick={() => setMenuOpen(false)}
              aria-label="Search products"
              className="text-xl text-gray-800 hover:text-orange-500 transition"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center gap-1.5 w-10 h-10"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`h-0.5 w-7 bg-black transition duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />

              <span
                className={`h-0.5 w-7 bg-black transition duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </button>

          </div>

        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >

          <div className="border-t border-gray-100 pt-5 flex flex-col">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-semibold border-b border-gray-100 transition ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/collections"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 text-white text-center py-4 mt-6 font-bold text-sm hover:bg-black transition"
            >
              SHOP NOW
              <i className="fa-solid fa-arrow-right ml-3" />
            </Link>

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;