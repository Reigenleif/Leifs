import { useState } from "react";
import Button2 from "../../UI/Button2";
import PopupHandler from "../../UI/PopupHandler";
import style from "./FoodPopup.module.css";

const FoodPopup = (props) => {
  const [notifAdded, setNotifAdded] = useState(false);
  const food = props.food;

  return (
    <PopupHandler activated={props.activated}>
      <div className={style["drop"]}>
        <div className={style["drop__content"]}>
          <img src={food.img} alt={food.name}></img>
          <div className={style["name"]}>{food.name}</div>
          <div className={style["desc"]}>{food.description}</div>
          <Button2
            btntype="add"
            onClick={() => {
              props.addfood();
              setNotifAdded(true);
            }}
          >
            Add
          </Button2>
          <Button2
            btntype="ccl"
            onClick={() => {
              props.setDropActive("0000");
            }}
          >
            X
          </Button2>
          <div className={style["price"]}>$ {food.price}</div>
          <div
            className={`${style["notif-added"]} ${
              notifAdded && style["activated"]
            }`}
          >
            Food Added!
          </div>
        </div>
      </div>
      ;
    </PopupHandler>
  );
};

export default FoodPopup;
