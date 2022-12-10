import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

import { AuthContext } from "../../context/AuthContext/AuthProvider";
import Header from "../Shared/Header/Header";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userEmail = result.user.email;
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ userEmail }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("gin-token", data.token);
          })
          .catch((err) => console.log(err));
        navigate("/user/viewpost");
      })
      .catch((err) => console.log(err));
    console.log({ email, password });
  };
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-6 justify-center items-center p-12">
        <div className="text-center lg:text-right col-span-2 md:col-span-1">
          <h1 className="text-5xl font-extrabold text-primary">UserBook</h1>
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-fullshadow-2xl bg-base-100 col-span-2 md:col-span-1">
          <div>
            <SocialLogin />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
