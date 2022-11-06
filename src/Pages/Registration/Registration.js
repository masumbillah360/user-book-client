import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import SocialLogin from "../Login/SocialLogin";

const Registration = () => {
  const { signInUser, updateUserInfo } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    console.log({ name, email, password });
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdate(name, phone);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (name, phone) => {
    const profile = {
      displayName: name,
      phoneNumber: phone,
    };
    console.log(profile);
    updateUserInfo(profile).catch((err) => console.log(err));
  };
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
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                autoComplete="Choose a secret password"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
