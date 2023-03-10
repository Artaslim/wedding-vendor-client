import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../assets/logo_dark.svg";
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSign = () => {
    logout()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/details">Services</Link>
      </li>
      <li className="font-semibold">
        <Link to="/reviews">Review</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>

      <li className="font-semibold bg-sky-50">
        {user?.email ? (
          <button className="btn btn-info" onClick={handleSign}>
            Log Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar h-20 mb-5 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl">
          <img className="w-50 md:w-1/2 lg:w-1/3 p-0" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn">All Service</button>
      </div>
    </div>
  );
};

export default Header;
