import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Handshake } from "lucide-react";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600 transition duration-300";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto h-20 px-3 sm:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">

        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-2 sm:gap-6">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">

            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
            >
              <HiOutlineMenuAlt3 size={26} />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-xl w-56 space-y-2"
            >
              <li>
                <NavLink to="/" className={navLinkStyle}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/browse-skills" className={navLinkStyle}>
                  Browse Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkStyle}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkStyle}>
                  Contact
                </NavLink>
              </li>
            </ul>

          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="
              w-9 
              h-9 
              sm:w-11 
              sm:h-11 
              rounded-xl 
              bg-green-600 
              text-white 
              flex 
              items-center 
              justify-center
              shadow-md
            ">
              <Handshake size={22} strokeWidth={2.3} />
            </div>

            <h1 className="text-xl sm:text-3xl font-extrabold">
              <span className="text-green-600">
                Skill
              </span>
              <span className="text-gray-800">
                Swap
              </span>
            </h1>
          </Link>

        </div>

        {/* Center: nav links */}
        <ul className="hidden lg:flex items-center gap-10 text-[16px]">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse-skills" className={navLinkStyle}>
              Browse Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="
            btn 
            btn-ghost 
            h-12 
            w-16
            sm:w-24
            bg-gray-100
            text-black
            hover:bg-green-700
            hover:text-white
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
            btn 
            bg-green-600 
            hover:bg-green-700 
            text-white 
            border-none 
            h-12 
            w-20
            sm:w-32
            "
          >
            Get Started
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;
