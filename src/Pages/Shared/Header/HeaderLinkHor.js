import React from "react";

const HeaderLinkHor = () => {
  return (
    <div>
      <ul className="menu md:menu-horizontal  bg-base-100 rounded-box">
        <li className="hover-bordered">
          <a>News Feed</a>
        </li>
        <li className="hover-bordered">
          <a>Create Post</a>
        </li>
        <li className="hover-bordered">
          <a>Your Post</a>
        </li>
        <li className="hover-bordered">
          <a>Group</a>
        </li>
        <li className="hover-bordered">
          <a>Pages</a>
        </li>
        <li className="hover-bordered">
          <a>Friends</a>
        </li>
        <li className="hover-bordered">
          <a>Live</a>
        </li>
        <li className="hover-bordered">
          <a>Videos</a>
        </li>
        <li className="hover-bordered">
          <a>Join Live</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinkHor;
