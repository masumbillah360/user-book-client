import React from "react";
import { FaFacebook, FaTwitter, FaWhatsappSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="my-1 text-center">
      <h4 className="font-bold">Login With Social Account</h4>
      <div className="flex justify-center items-center">
        <button className="btn btn-ghost text-3xl mr-2">
          <FcGoogle />
        </button>
        <button className="btn btn-ghost text-3xl mr-2">
          <FaFacebook className="text-blue-600" />
        </button>
        <button className="btn btn-ghost text-3xl mr-2">
          <FaWhatsappSquare className="text-success" />
        </button>
        <button className="btn btn-ghost text-3xl mr-2">
          <FaTwitter className="text-sky-500" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
