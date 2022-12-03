import React, { useEffect, useState } from "react";
import SignlePost from "./SinglePost";

const ViewPost = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(10);
  useEffect(() => {
    fetch(`http://localhost:5000/allpost?page=${page}&size=${size}`, {
      headers: {
        authorization: `Bearar ${localStorage.getItem("gin-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data.result);
        setCount(data.count);
      })
      .catch((err) => console.log(err));
  }, [page, size]);
  const pages = Math.ceil(count / size);
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary">
        Your All Posts Are Here...
      </h1>
      <div>
        <div className="grid grid-cols-2 md:gap-4">
          {post?.map((p) => (
            <SignlePost key={p._id} postInfo={p} />
          ))}
        </div>
        {[...Array(pages)?.keys()]?.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className="btn btn-ghost ml-2"
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewPost;
