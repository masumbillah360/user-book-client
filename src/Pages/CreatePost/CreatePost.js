import React from "react";

const CreatePost = () => {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-bold text-center my-3">
        Create Your Post Here!
      </h1>
      <div>
        <form>
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
                name="mindset"
                placeholder="Type here"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="form-control col-span-2">
              <label htmlFor="desc" className="label">
                Write Here Post Description
              </label>
              <textarea
                name="desc"
                className="textarea textarea-primary w-full"
                placeholder="Write Your Post Here"
                rows="5"
              ></textarea>
            </div>
            <div className="form-control col-span-2">
              <label htmlFor="thumb" className="label">
                Upload Your Photo
              </label>
              <input
                name="thumb"
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
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
