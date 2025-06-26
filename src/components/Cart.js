import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearItem } from "../cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="w-6/12 m-auto text-center">
      <h1 className="text-center font-extrabold text-2xl">Cart</h1>
      <button
        className=" p-2 m-2 bg-blue-500 text-white rounded text-center mx-auto cursor-pointer"
        onClick={handleClearCart}
      >
        ClearCart
      </button>
      {cartItems.length == 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
