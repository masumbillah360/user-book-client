import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const { logOut, user, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => setUser({}))
      .catch((err) => setUser({}));
  };
  const navMenu = (
    <>
      {user?.uid ? (
        ""
      ) : (
        <>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            {navMenu}
            <>{user?.uid && <HeaderLink />}</>
          </ul>
        </div>
        <Link
          to="/newsfeed"
          className="btn btn-ghost text-primary normal-uppercase text-xl"
        >
          UserBook
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0">{navMenu}</ul>
      </div>

      <>
        {user?.uid && (
          <div className="navbar-end">
            <label
              className="tooltip tooltip-bottom hidden md:block"
              data-tip={user?.displayName}
            >
              {user?.displayName ? user?.displayName : "notfuond"}
            </label>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/user/profile" className="justify-between">
                    {user?.displayName}
                  </Link>
                </li>

                <li>
                  <Link to="/user/update-profile" className="justify-between">
                    Update Profile
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Header;
