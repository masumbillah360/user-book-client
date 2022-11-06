import React from "react";
import HeaderLinkHor from "../Shared/Header/HeaderLinkHor";

const UserProfie = () => {
  return (
    <div className="card card-compact">
      <figure>
        <img
          className="rounded-full h-48 w-48 bordered border-2 border-green-500"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="font-bold text-3xl text-primary">Shoes!</h2>
        <p>Eamil : halumalu@gm.com </p>
        <p> About : If a dog chews shoes whose shoes does he choose?</p>
        <p>
          Description :Vexed harold dome nor wandered had, of found not isle
          friend, present harold which so his there, ungodly wandered was
          pilgrimage feels said are objects though earthly, she weary friend of
          and passion, said her whateer he the, haply sister massy to they. Love
          that present delight flow loved were. Drugged heart of ne through the
          who ye but sister. Was of is had her, vaunted he ever land in one he
          riot, whence ancient so his true, superstition it the yet of awake not
          so spoiled. Yet that they chill to now his name men into. Sullen clay
          these.
        </p>
        <HeaderLinkHor />
      </div>
    </div>
  );
};

export default UserProfie;
