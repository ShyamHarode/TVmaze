import "./styles.css";
import ShowBox from "./ShowBox";
import ActorBox from "./ActorBox";

const AllShows = (props) => {
  return (
    <div className="showList">
      {props.showList.map((showDetails, idx) => {
        return props.option === "Show" ? (
          <ShowBox key={idx} showDetails={showDetails} />
        ) : (
          <ActorBox key={idx} showDetails={showDetails} />
        );
      })}
    </div>
  );
};
export default AllShows;
