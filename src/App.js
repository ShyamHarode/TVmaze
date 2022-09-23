import { useEffect, useState } from "react";
import AllShows from "./AllShows";
import Loading from "./Loading";
import { debounce } from "lodash";
import stream from "./image/stream.jpg";
import "./styles.css";

export default function App() {
  const [searchItem, setSearchItem] = useState("");
  const [option, setOption] = useState("");
  const [showList, setShowList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = debounce((e) => {
    e.preventDefault();
    let input = e.target.value;
    setSearchItem(input);
  }, 500);

  const handleClick = (e) => {
    if (
      e.target.tagName !== "INPUT" &&
      e.target.tagName !== "LABEL" &&
      e.target.id === "box"
    ) {
      document.getElementById("opt1").checked = false;
      document.getElementById("opt2").checked = false;
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const getShow = async (data) => {
    try {
      let actorData = data[0];
      let id = actorData.person.id;
      let url1 = `https://api.tvmaze.com/people/${id}/castcredits?embed=show`;
      const response1 = await fetch(url1);
      const data1 = await response1.json();
      setShowList(data1);
    } catch (error) {
      console.log(error, "catch");
    }
  };

  const getData = async () => {
    try {
      const url =
        (option === "Show" &&
          searchItem !== "" &&
          `https://api.tvmaze.com/search/shows?q=${searchItem}`) ||
        (option === "Actor" &&
          searchItem !== "" &&
          `https://api.tvmaze.com/search/people?q=${searchItem}`) ||
        (option === "" && "https://api.tvmaze.com/shows?page=1");

      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (option === "Actor") {
        getShow(data);
      } else {
        setShowList(data);
      }
    } catch (error) {
      console.log(error, "catch");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, [searchItem]);

  const handleOption = (event) => {
    setOption(event.target.value);
    setShowList([]);
    setSearchItem("");
  };

  return (
    <div className="App">
      <h1 className="heading">TV maze</h1>
      <div
        id="box"
        className="container"
        style={{ backgroundImage: `url(${stream})` }}
      >
        <h2>Search Your Favourite Shows</h2>
        <div className="option" onChange={handleOption}>
          <input type="radio" id="opt1" name="option" value="Actor" />
          <label className="opt" htmlFor="opt1">
            Actor{" "}
          </label>
          <input type="radio" id="opt2" name="option" value="Show" />
          <label className="opt" htmlFor="opt2">
            Show
          </label>
        </div>
        <label>
          {option === "Show" ? "Enter show below" : "Enter people below"}
        </label>
        <br />
        <input
          type="search"
          className="searchBox"
          defaultValue={searchItem}
          onChange={handleSearch}
        />
        <br />
        {showList.length === 0 && searchItem !== "" && (
          <span style={{ color: "red" }}>No Result Found!</span>
        )}
      </div>
      {loading && <Loading />}
      <AllShows showList={showList} searchItem={searchItem} option={option} />
    </div>
  );
}

