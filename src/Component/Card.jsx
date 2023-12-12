import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, id }) => {
  return (
    <div className="bg-main">
      <Link to={`/watch-movie/${id}`}>
        <img
          src={img}
          alt=""
          className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
        />
      </Link>
    </div>
  );
};

export default Card;
