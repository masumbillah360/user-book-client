import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";

const Registration = () => {
  return (
    <div className="grid grid-cols-2 gap-6 justify-center items-center p-12">
      <div className="text-center lg:text-right col-span-2 md:col-span-1">
        <h1 className="text-5xl font-extrabold text-yellow-500">Free!</h1>
        <h1 className="text-5xl font-extrabold text-primary">UserBook</h1>
        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card flex-shrink-0 w-fullshadow-2xl bg-base-100 col-span-2 md:col-span-1">
        <div className="card-body">
          <SocialLogin />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Choose a secret password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already Have an Account ?{" "}
                <span className="text-primary font-bold">Please Login</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
