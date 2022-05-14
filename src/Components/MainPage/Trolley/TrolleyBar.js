import react from "react";
import ReactDOM from "react-dom";
import style from "./TrolleyBar.module.css";
import { useContext, useState } from "react";
import CartContext from "../../../Storage/CartContext";
import FoodContext from "../../../Storage/FoodContext";
import CartUI from "./CartUI";

const TrolleyBar = (props) => {
  const Cart = useContext(CartContext);
  const Foods = useContext(FoodContext).FoodData;

  const CartFood = Object.keys(Cart.cart).map((key) => {
    return <img src={Foods[key].img} alt={key} key={key}></img>;
  });

  const [isCartActive,setIsCartActive] = useState(false)

  const cartActiveHandler = () => {
    setIsCartActive((prev) => !prev)
  }

  const menulist = {}

  for (let key in Cart.cart) {
    menulist[key] = {}
    menulist[key].price = Foods[key].price
    menulist[key].name = Foods[key].name
    menulist[key].count = Cart.cart[key]
  }

  const totals = {
    count: Cart.getTotalCount(),
    price: Cart.getTotalPrice()
  }

  const content = (
    <>
      <div className={style["trolley-bar"]} onClick={cartActiveHandler}>
        <div className={style["trolley-bar__container"]}>{CartFood}</div>
      </div>
      <div className={style["trolley-button"]} onClick={cartActiveHandler}></div>
      <CartUI isCartActive={isCartActive} menulist={menulist} totals={totals} close={cartActiveHandler}/>
    </>
  );

  return ReactDOM.createPortal(content, document.getElementById("root2"));
};

export default react.memo(TrolleyBar);
