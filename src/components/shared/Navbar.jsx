import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/browse-skills">Browse Skills</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8 sticky top-0 z-50">

      {/* Navbar Start */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown">

          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu size={22} />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-56"
          >
            {navLinks}
          </ul>

        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-primary"
        >
          SkillSwap
        </Link>

      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 gap-2">

          {navLinks}

        </ul>

      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">

        <Link
          to="/login"
          className="btn btn-outline btn-primary btn-sm"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="btn btn-primary btn-sm"
        >
          Register
        </Link>

      </div>

    </div>
  );
};

export default Navbar;