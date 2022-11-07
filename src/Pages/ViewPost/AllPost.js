import React from "react";

const AllPost = ({ postInfo }) => {
  const { title, thumbUrl, post, mind, time } = postInfo;
  return (
    <div className="my-6">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full rounded-xl" src={thumbUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <span className="indicator-item badge badge-primary">{mind}</span>

          <h2 className="card-title">{title}</h2>
          <p>{post}</p>
          <div className="card-actions justify-around items-center">
            <p>Post Time : {time}</p>
            <button className="btn btn-primary btn-sm">View Full Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
