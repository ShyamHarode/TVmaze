import React from "react";
import "./styles.css";
import No_Image from "./image/No_Image.jpg";

const ActorBox = (props) => {
  let person = props.showDetails.person;
  return (
    <div className="poster">
      {person.image ? (
        <img src={person.image.medium} alt="NA" />
      ) : (
        <img src={No_Image} alt="NA" />
      )}
      <div className="showData">
        <span>{person.name}</span>
        <br />
        <span>Gender: {person.gender}</span>
        <br />
        <a href={person.url} target="blank">
          Details...
        </a>
      </div>
    </div>
  );
};
export default ActorBox;
