import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllFriends = () => {
  const {
    data: allFriends,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["AllFriends"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div>
        <h1 className="text-5xl font-bold text-red-500">Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }
  if (isFetching) {
    <div>
      <h1>DataFetching</h1>
    </div>;
  }
  console.log(allFriends);
  return (
    <div>
      {allFriends && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allFriends.map((friend) => (
            <div key={friend?.id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  className="rounded-full h-36 w-36"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{friend?.name}</h2>
                <p>Sure Name : {friend?.username}</p>
                <p>{friend?.email}</p>
                <p>City: {friend?.address?.city}</p>
                <div className="card-actions">
                  <button className="btn btn-primary btn-sm">Message</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFriends;
