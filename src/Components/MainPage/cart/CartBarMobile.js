import { useContext } from "react";
import CartContext from "../../../Storage/CartContext";
import FoodContext from "../../../Storage/FoodContext";
import PopupContext from "../../../Storage/PopupContext";
import style from "./CartBarMobile.module.css";
import CartUI from "./CartUI";

export default function CartBarMobile() {
  const Cart = useContext(CartContext);
  const { FoodData: Foods } = useContext(FoodContext);
  const { triggerPopup, disablePopup } = useContext(PopupContext);

  const cartFood = Object.keys(Cart.cart).map((key) => {
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
    triggerPopup(<CartUI menulist={menulist} totals={totals} />);
  }

  function gobackHandler() {
    disablePopup();
  }

  return (
    <div className={style.container}>
      <div className={style.title}>My Cart</div>
      <div className={style.imgs}>{cartFood}</div>
      <div className={style["btns"]}>
        <button className={style["btn-checkout"]} onClick={cartUIToggleHandler}>
          Checkout
        </button>
        <button className={style["btn-back"]} onClick={gobackHandler}>
          Back
        </button>
      </div>
    </div>
  );
}
