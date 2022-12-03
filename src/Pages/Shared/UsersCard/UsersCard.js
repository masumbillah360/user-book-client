import React from "react";

const UsersCard = ({ usersInfo }) => {
  return (
    <div key={usersInfo?.id} className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-full h-36 w-36"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{usersInfo?.name}</h2>
        <p>Sure Name : {usersInfo?.username}</p>
        <p>{usersInfo?.email}</p>
        <p>City: {usersInfo?.address?.city}</p>
        <div className="card-actions justify-center gap-2 mt-2">
          {usersInfo?.friend && (
            <button className="btn btn-primary btn-sm">Message</button>
          )}
          <button className="btn btn-primary btn-sm">Add Friend</button>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
