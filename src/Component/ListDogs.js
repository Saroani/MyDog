import React from "react";
import { Link } from "react-router-dom";

const ListDogs = (props) => {
  return (
    <div className="container">
      {props.dogs.map((item, index) => (
        <Link to={`/showDogs/${item.name}`}>
          <img src={item.src} key={index} />
        </Link>
      ))}
    </div>
  );
};

export default ListDogs;
