import React from "react";
import { useParams } from "react-router-dom";

const DogDetaile = (props) => {
  const { name } = useParams();
  let index = props.dogs.findIndex(
    (d) => d.name.toLowerCase() === name.toLowerCase()
  );
  let dogCurrent = props.dogs[index];

  return (
    <div className="DogDetaile">
      <h1>{name}</h1>
      <h2>{dogCurrent.age}</h2>
      {dogCurrent.facts.map((f, index) => (
        <p key={index}>{f}</p>
      ))}
    </div>
  );
};

export default DogDetaile;
