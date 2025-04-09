import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#23BE0A] font-semibold underline"
      : "text-[#131313] hover:text-[#23BE0A]";

  const link = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/books-list" className={navLinkStyle}>
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={navLinkStyle}>
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <h2 className="text-xl font-bold" style={{ color: "#131313" }}>
          Book Store
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-ghost text-white rounded-md"
          style={{ backgroundColor: "#23BE0A" }}
        >
          Sign In
        </a>
        <a
          className="btn btn-ghost text-white rounded-md ml-2"
          style={{ backgroundColor: "#59C6D2" }}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
