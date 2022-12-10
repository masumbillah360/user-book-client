import React from "react";
import { Link } from "react-router-dom";
import aboutus from "../../assets/aboutUs.jpg";
import Header from "../Shared/Header/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="hero mt-12">
        <div className="hero-content text-center grid grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <img className="max-w-full rounded-lg" src={aboutus} alt="" />
          </div>
          <div className="max-w-md col-span-2 md:col-span-1">
            <h1 className="text-5xl font-bold">UserBook</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/signup" className="btn btn-primary">
              SignUp Free!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
