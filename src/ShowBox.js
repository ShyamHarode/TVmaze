import React from "react";
import "./styles.css";
import ShowDetails from "./ShowDetails";
import No_Image from "./image/No_Image.jpg";

const ShowBox = (props) => {
  let show = props.showDetails.show;
  return (
    <div className="poster">
      {show.image ? (
        <img src={show.image.medium} alt="NA" />
      ) : (
        <img src={No_Image} alt="NOT" />
      )}
      <div className="showData">
        <span style={{ fontWeight: "bold" }}>{show.name}</span>
        <br />
        <span>Language: {show.language}</span>
        <br />
        <span role="img">⭐</span>
        <span> {show.rating.average ? show.rating.average : "NA"}</span>
        <br />
        <ShowDetails show={show} />
      </div>
    </div>
  );
};
export default ShowBox;
