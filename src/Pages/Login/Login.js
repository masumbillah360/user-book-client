import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div className="grid grid-cols-2 gap-6 justify-center items-center p-12">
      <div className="text-center lg:text-right col-span-2 md:col-span-1">
        <h1 className="text-5xl font-extrabold text-primary">UserBook</h1>
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card flex-shrink-0 w-fullshadow-2xl bg-base-100 col-span-2 md:col-span-1">
        <div>
          <SocialLogin />
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="text-center">
            <h1 className="text-yellow-600 text-sm font-bold">
              Do Not Have an Account ?
            </h1>
            <Link to="/signup" className="text-primary underline">
              Please Sign Up Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
