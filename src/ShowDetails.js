import React, { useState } from "react";
import "./styles.css";
import No_Image from "./image/No_Image.jpg";

const ShowDetails = (props) => {
  const [details, setDetails] = useState(false);
  let show = props.show;
  return details ? (
    <div id="details">
      <span className="cancel" onClick={() => setDetails(false)}>
        &#10060;
      </span>
      {show.image ? (
        <img src={show.image.medium} alt="NA" />
      ) : (
        <img src={No_Image} alt="NOT" />
      )}
      <div className="showData">
        <h3>{show.name}</h3>
        <span>Language: {show.language}</span>
        <br />
        <span>⭐</span>
        <span> {show.rating.average ? show.rating.average : "NA"}</span>
        <br />
        <span>
          Genres:{" "}
          {show.genres.map((g) => {
            return <span>{g} </span>;
          })}
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
    </div>
  ) : (
    <details onClick={() => setDetails(true)}>Get</details>
  );
};
export default ShowDetails;
