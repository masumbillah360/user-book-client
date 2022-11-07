import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postInfo = useLoaderData();
  const { _id, title, thumbUrl, post, mind, time } = postInfo;
  const navigate = useNavigate();
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/allpost/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/user/viewpost"))
      .catch((err) => console.log(err));
  };
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
            <div className="flex justify-end items-center">
              <Link
                to={`/user/update-post/${_id}`}
                className="btn btn-primary btn-sm mr-3"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
