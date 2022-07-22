import style from "./CartBar.module.css";
import { useContext } from "react";
import CartContext from "../../../Storage/CartContext";
import FoodContext from "../../../Storage/FoodContext";
import CartUI from "./CartUI";
import PopupContext from "../../../Storage/PopupContext";

const CartBar = (props) => {
  const Cart = useContext(CartContext);
  const Foods = useContext(FoodContext).FoodData;
  const triggerPopup = useContext(PopupContext).triggerPopup;

  const CartFood = Object.keys(Cart.cart).map((key) => {
    return <img src={Foods[key].img} alt={key} key={key}></img>;
  });

  const menulist = {};

  for (let key in Cart.cart) {
    menulist[key] = {};
    menulist[key].price = Foods[key].price;
    menulist[key].name = Foods[key].name;
    menulist[key].count = Cart.cart[key];
  }

  const totals = {
    count: Cart.getTotalCount(),
    price: Cart.getTotalPrice(),
  };

  function cartUIToggleHandler() {
    triggerPopup(
      <CartUI menulist={menulist} totals={totals}/>
    );
  }

  const content = (
    <div className={style["container"]}>
      <div className={style["items"]}>
        <h1>My Cart : </h1>
        {CartFood}
      </div>
      <button className={style["btn-checkout"]} onClick={cartUIToggleHandler}>
        CHECKOUT
      </button>
    </div>
  );

  return content;
};

export default CartBar;
