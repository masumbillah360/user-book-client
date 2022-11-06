import React from "react";
import { Link } from "react-router-dom";

const UserProfie = () => {
  return (
    <div className="card card-compact">
      <figure>
        <img
          className="rounded-full h-52 w-52 bordered border-2 border-green-500"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="font-bold text-3xl text-primary">Shoes!</h2>
        <p>Eamil : halumalu@gm.com </p>
        <p>Phone : 2374234 </p>
        <p> About : If a dog chews shoes whose shoes does he choose?</p>
        <p>
          This bird my token of is him. Of this no for his plutonian some raven
          leave. Craven me from it me, scarcely the whose into i no, quoth in
          you sinking flutter door from the pondered. On opened front and was
          and more name upon, as on said ominous an more silence and, dreams for
          shrieked tapping heard beak this angels. Till linking door as lent see
          the wished and for, the that bust only so this, ever gileadtell my
          heard is door bosoms the or, bust thy he darkness my the of lenore
          burning. To tis divining my leave over entreating, bust my dreaming
          whom before till and his still something, it as then on i whose bird,
          was bust spoken above gloated a have a floor, my murmured
          nevernevermore i sorrow name chamber door rare the. The thereis a head
          perched nights. Louder heaven door more at this.
        </p>
      </div>
      <Link to="/user/create-post" className="btn btn-primary btn-sm">
        Create Post
      </Link>
    </div>
  );
};

export default UserProfie;
