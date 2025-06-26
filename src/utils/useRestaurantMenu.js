import { useState, useEffect } from "react";

const useRestaurantmenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
        resId
    );

    const json = await data.json();
    // console.log(
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    // );
    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantmenu;
