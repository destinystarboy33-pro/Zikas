
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "fa-solid fa-house",
    },
    {
      name: "Create Product",
      path: "/admin/createproduct",
      icon: "fa-solid fa-plus",
    },
    {
      name: "Edit Products",
      path: "/admin/editproduct",
      icon: "fa-solid fa-pen-to-square",
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: "fa-solid fa-box",
    },
    {
      name: "Payments",
      path: "/admin/payments",
      icon: "fa-solid fa-credit-card",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-black text-white h-16 px-5 flex items-center justify-between">

        <h1 className="text-2xl font-black tracking-tighter">
          ZIKAS<span className="text-orange-500">.</span>
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
          aria-label="Toggle admin menu"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>

      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72 bg-black text-white flex flex-col transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >

        {/* LOGO */}
        <div className="px-7 py-8 border-b border-gray-800">

          <h1 className="text-3xl font-black tracking-tighter">
            ZIKAS<span className="text-orange-500">.</span>
          </h1>

          <p className="text-gray-500 text-xs tracking-[3px] mt-2">
            ADMINISTRATION
          </p>

        </div>

        {/* MENU */}
        <div className="flex-1 px-4 py-8 overflow-y-auto">

          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[3px] px-4 mb-5">
            Management
          </p>

          <nav className="space-y-2">

            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/admin/dashboard"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-4 text-sm font-semibold transition duration-300
                  ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-400 hover:bg-gray-900 hover:text-white"
                  }`
                }
              >

                <i className={`${item.icon} w-5 text-center`} />

                <span>{item.name}</span>

                <i className="fa-solid fa-chevron-right text-[10px] ml-auto opacity-50" />

              </NavLink>
            ))}

          </nav>

        </div>

        {/* BOTTOM SECTION */}
        <div className="p-5 border-t border-gray-800">

          <div className="bg-gray-900 p-4 mb-5">
            <p className="text-white text-sm font-bold">
              ZIKAS Store
            </p>

            <p className="text-gray-500 text-xs mt-1">
              Admin Control Panel
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/10 transition"
          >
            <i className="fa-solid fa-right-from-bracket w-5 text-center" />
            Logout
          </button>

        </div>

      </aside>
    </>
  );
};

export default AdminSidebar;
