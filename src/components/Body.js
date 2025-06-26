import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  let [searchText, setSearchText] = useState("");
  let { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );

    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //if (listOfRestaurant.length === 0) return <Shimmer />;

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Loading</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter m-2 p-2">
        <button
          className="border px-2 shadow-blue-950"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.6
            );
            setFilteredListOfRestaurant(filteredRestaurant);
          }}
        >
          Top Restaurant
        </button>

        <input
          className="border px-2 shadow-blue-950 mx-2"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border px-2 shadow-blue-950 mx-2"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          <input
            className="border px-2 shadow-blue-950 mx-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          Search
        </button>
      </div>

      <div className="restaurant-container m-2 p-2 flex flex-wrap">
        {filteredListOfRestaurant.map((res) => (
          <Link to={"restaurant/" + res.info.id} key={res.info.id}>
            {" "}
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
