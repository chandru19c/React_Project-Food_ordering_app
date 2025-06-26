import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  //console.log(loggedInUser);
  return (
    <div className="flex justify-between  border-amber-600 border-2 m-2 p-2">
      <div className="p-4 m-4">
        <img
          className="w-24"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.jpg"
        />
      </div>

      <div className="nav-items">
        <ul className="flex">
          <li className="p-4 m-4">
            OnlineStatus: {onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="p-4 m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 m-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="p-4 m-4">
            <button
              className="border px-2 rounded-bl-sm"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>

          <li className="p-4 m-4">User: {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
