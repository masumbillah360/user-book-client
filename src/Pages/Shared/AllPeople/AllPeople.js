import { useQuery } from "@tanstack/react-query";
import React from "react";
import UsersCard from "../UsersCard/UsersCard";

const AllPeople = () => {
  const {
    data: allPeople,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["allPeople"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/create-user");
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
  console.log(allPeople);
  return (
    <div>
      {allPeople && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allPeople.map((friend) => (
            <UsersCard usersInfo={friend} key={friend.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPeople;
