import style from "./FoodCell.module.css";
import CartContext from "../../../Storage/CartContext";
import FoodPopup from "./FoodPopUp";
import { useContext } from "react";

const FoodCell = (props) => {
  const food = props.food;
  const activated = props.kkey === props.dropActive;
  const cart = useContext(CartContext);

  return (
    <div
      className={`${style["img-wrapper"]} ${
        props.dropActive === props.kkey && style["activated"]
      }`}
      onClick={
        activated
          ? () => {}
          : () => {
              props.setDropActive(props.kkey);
            }
      }
    >
      <FoodPopup
        food={food}
        setDropActive={props.setDropActive}
        addfood={() => {cart.updateCart("add", props.kkey)}}
        activated={props.dropActive === props.kkey}
      />
      <span>
        <img src={food.img} alt={food.name}></img>
        <div className={style["name"]}>{food.name}</div>
      </span>
    </div>
  );
};

export default FoodCell;
