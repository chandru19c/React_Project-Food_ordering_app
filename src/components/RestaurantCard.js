import { CDN_API } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  //console.log(props)
  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, avgRating, cloudinaryImageId } = props.resData?.info;
  return (
    <div className="res-card w-50 h-80 border p-2 text-center shadow-black shadow-2xl m-2 rounded-2xl">
      <img
        className="w-[100%] h-36 rounded-xl"
        src={CDN_API + cloudinaryImageId}
      />

      <h2 className="font-bold">{name}</h2>
      <h3 className="font-semibold">{cuisines.join(", ")}</h3>
      <h3 className="font-semibold">{avgRating} Rating</h3>
      <h3 className="font-semibold">{loggedInUser} </h3>
    </div>
  );
};

export default RestaurantCard;
