import { CDN_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";

const ItemList = ({ items }) => {
  console.log(items);
  //const { name, description, imageId, image } = item;

  const dispatch = useDispatch();
  const handleAdddItem = (item) => dispatch(addItem(item));

  return (
    <div>
      {items.map((item) => (
        <div
          className="flex justify-between p-2 text-left"
          key={item?.card?.info?.id}
        >
          <div className="w-10/12">
            <h1 className="font-bold">{item?.card?.info?.name}</h1>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-2/12">
            <button
              className="px-2 bg-black text-amber-50 absolute left-auto cursor-pointer"
              onClick={() => handleAdddItem(item)}
            >
              Add +
            </button>
            <img
              className="w-30"
              src={
                item.card.info.imageId
                  ? CDN_API + item.card.info.imageId
                  : CDN_API + item.card.info.image
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
