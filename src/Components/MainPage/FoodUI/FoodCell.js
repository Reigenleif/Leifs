import style from "./FoodCell.module.css";
import FoodPopup from "./FoodPopUp";
import { useContext } from "react";
import PopupContext from "../../../Storage/PopupContext";

const FoodCell = (props) => {
  const triggerPopup = useContext(PopupContext).triggerPopup
  const food = props.food;
  const kkey = props.kkey

  function clickHandler() {
    triggerPopup(<FoodPopup food={food} kkey={kkey}/>)
  }
  

  return (
    <div
      className={`${style["img-wrapper"]}`}
      onClick=
        {clickHandler}
    >
      <span>
        <img src={food.img} alt={food.name}></img>
        <div className={style["name"]}>{food.name}</div>
      </span>
    </div>
  );
};

export default FoodCell;
