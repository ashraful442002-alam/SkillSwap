import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Handshake, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600 transition duration-300";

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

 const menuLinks = [
  {
    to: "/",
    label: "Home",
  },

  {
    to: "/browse-skills",
    label: "Browse Skills",
  },

  ...(user
    ? [
        {
          to: "/add-skill",
          label: "Add Skill",
        },

        {
          to: "/my-skills",
          label: "My Skills",
        },

        {
          to: "/dashboard",
          label: "Dashboard",
        },
      ]
    : []),
];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto h-20 px-3 sm:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <HiOutlineMenuAlt3 size={26} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-xl w-56 space-y-2"
            >
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={navLinkStyle}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-md">
              <Handshake size={22} strokeWidth={2.3} />
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold">
              <span className="text-green-600">Skill</span>
              <span className="text-gray-800">Swap</span>
            </h1>
          </Link>
        </div>

        {/* Center: nav links */}
        <ul className="hidden lg:flex items-center gap-10 text-[16px]">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkStyle}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2"
                title="Dashboard"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-green-600"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    {(user.displayName || user.email || "?")
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                )}
                <span className="hidden sm:block text-sm font-semibold text-gray-700 max-w-24 truncate">
                  {user.displayName || user.email}
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="btn btn-ghost h-12 px-3 bg-gray-100 text-black hover:bg-red-500 hover:text-white"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-ghost h-12 w-16 sm:w-24 bg-gray-100 text-black hover:bg-green-700 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-green-600 hover:bg-green-700 text-white border-none h-12 w-20 sm:w-32"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
