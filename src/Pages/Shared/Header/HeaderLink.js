import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <ul className="menu bg-base-100 rounded-box">
      <li className="hover-bordered">
        <Link to="/newsfeed">News Feed</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/user/create-post">Create Post</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/user/viewpost">Your Post</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/user/profile">Group</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/user/profile">Pages</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/friends">Friends</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/peoples">Show People</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/profile">Live</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/user/profile">Videos</Link>
      </li>
      <li className="hover-bordered">
        <Link to="/user/profile">Join Live</Link>
      </li>
    </ul>
  );
};

export default HeaderLink;
