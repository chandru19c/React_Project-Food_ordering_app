import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, index, showIndex, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);

  const handleItem = (index) => {
    setShowIndex(showIndex === index ? null : index);
    console.log(index);
  };
  //console.log(data.data.title);
  return (
    <div className="w-[80%] mx-auto my-2">
      <div
        className="title bg-amber-700 shadow-2xl font-extrabold p-2 flex justify-between text-white"
        onClick={() => handleItem(index)}
      >
        <span>
          {data.title.toUpperCase()}-({data.itemCards.length})
        </span>{" "}
        <span>⬇</span>
      </div>
      {showIndex === index && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
