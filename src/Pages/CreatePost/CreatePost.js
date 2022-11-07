import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const time = `Date: ${new Date().getDate()} Month: ${new Date().getMonth()} Year : ${new Date().getFullYear()}`;
  const handleSubmitPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const mind = form.mind.value;
    const post = form.post.value;
    const thumbUrl = form.thumbUrl.value;
    const postObj = { time, userEmail, title, mind, post, thumbUrl };
    console.log(user);
    fetch("http://localhost:5000/create-post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postObj),
    }).catch((err) => console.log(err.message));
  };
  return (
    <div className="mt-5">
      <h1 className="text-xl font-bold text-center my-3">
        Create Your Post Here!
      </h1>
      <div>
        <form onSubmit={handleSubmitPost}>
          <div className="grid grid-cols-2 md:gap-5">
            <div className="form-control">
              <label htmlFor="title" className="label">
                Post Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Post Title"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="mindset" className="label">
                What's Your Mind ?
              </label>
              <input
                type="text"
                name="mind"
                placeholder="Type here"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="form-control col-span-2">
              <label htmlFor="desc" className="label">
                Write Here Post Description
              </label>
              <textarea
                name="post"
                className="textarea textarea-primary w-full"
                placeholder="Write Your Post Here"
                rows="5"
              ></textarea>
            </div>
            <div className="form-control col-span-2">
              <label htmlFor="thumbUrl" className="label">
                Upload Your Photo
              </label>
              <input
                type="text"
                name="thumbUrl"
                placeholder="Enter your Photo URL"
                className="input input-bordered input-primary w-full"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <input
              type="submit"
              className="btn btn-primary mx-auto w-24"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
