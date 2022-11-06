import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <ul className="menu bg-base-100 rounded-box">
      <li className="hover-bordered">
        <Link to="/user/newsfeed">News Feed</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/user/create-post">Create Post</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/">Your Post</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/">Group</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/">Pages</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/">Friends</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/">Live</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/">Videos</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/">Join Live</Link>
      </li>
    </ul>
  );
};

export default HeaderLink;
