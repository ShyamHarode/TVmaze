import "./styles.css";
import ShowBox from "./ShowBox";

const AllShows = (props) => {
  return (
    <div className="showList">
      {props.showList.length > 0
        ? props.showList.map((showDetails, idx) => {
            if (props.option === "Show") {
              return <ShowBox key={idx} show={showDetails.show} />;
            } else if (props.option === "Actor") {
              return <ShowBox key={idx} show={showDetails._embedded.show} />;
            } else {
              return <ShowBox key={idx} show={showDetails} />;
            }
          })
        : ""}
    </div>
  );
};
export default AllShows;
