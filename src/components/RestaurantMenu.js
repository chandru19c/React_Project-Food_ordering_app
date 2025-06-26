import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantmenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  let resMenu = useRestaurantmenu(resId);
  if (resMenu == null) return <Shimmer />;
  const { name, cuisines } = resMenu.cards[2].card.card.info;

  const { itemCards } =
    resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const category =
    resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(category);
  return (
    <div className="text-center">
      <h1 className="font-extrabold text-2xl">{name}</h1>
      <h3 className="font-semibold">{cuisines.join(", ")}</h3>
      <h1 className="font-bold mt-4 text-xl">Menu</h1>
      {category.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.categoryId}
          data={category.card.card}
          showIndex={showIndex}
          index={index}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}

      {/* <RestaurantCategory data={category[0].card.card} /> */}
      {/* <ul>
        {itemCards.map((item) => (
          <li className="mt-1" key={item.card.info.id}>
            {item.card.info.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
