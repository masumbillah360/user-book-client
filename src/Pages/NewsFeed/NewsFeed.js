import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import SignlePost from "../ViewPost/SinglePost";

const NewsFeed = () => {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(10);
  const {
    data: allposts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allpost");
      const data = await res.json();
      setCount(data?.count);
      return data?.result;
    },
  });
  const pages = Math.ceil(count / size);
  console.log(allposts);
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary">
        Your All Posts Are Here...
      </h1>
      <div>
        <div className="grid grid-cols-2 md:gap-4">
          {allposts?.map((p) => (
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

export default NewsFeed;
