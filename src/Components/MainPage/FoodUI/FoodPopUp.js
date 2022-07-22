import { useContext, useState } from "react";
import CartContext from "../../../Storage/CartContext";
import style from "./FoodPopup.module.css";

const FoodPopup = (props) => {
  const [notif, setNotif] = useState("");
  const cart = useContext(CartContext)
  const food = props.food;

  if (props.activated) {
    return;
  }

  return (
    <div className={style["wrapper"]}>
      <div className={style["content"]}>
        <img src={food.img} alt={food.name}></img>
        <div className={style["name"]}>{food.name}</div>
        <div className={style["desc"]}>{food.description}</div>

        <div className={style["container-2"]}>
          <div className={style["price"]}>$ {food.price}</div>
          <button
            className={style["btn-add"]}
            onClick={() => {
              cart.updateCart('add',props.kkey);
              setNotif("Food Added!");
            }}
          >
            Add
          </button>
        </div>

        <div
          className={`${style["notif-added"]} ${!!notif && style["activated"]}`}
        >
          {notif}
        </div>
      </div>
    </div>
  );
};

export default FoodPopup;
