import React from "react";
import { Link } from "react-router-dom";
import aboutus from "../../assets/aboutUs.jpg";

const About = () => {
  return (
    <div className="hero mt-12 flex justify-center items-center">
      <div className="hero-content text-center">
        <div>
          <img className="max-w-md rounded-lg" src={aboutus} alt="" />
        </div>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">UserBook</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/signup" className="btn btn-primary">
            SignUp Free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
