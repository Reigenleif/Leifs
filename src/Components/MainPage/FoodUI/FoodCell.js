import style from "./FoodCell.module.css";
import Button2 from "../../UI/Button2";

const FoodCell = (props) => {
  const food = props.food;
  const activated = props.kkey === props.dropActive

  return (
    <div
      className={`${style["img-wrapper"]} ${
        props.dropActive === props.kkey && style["activated"]
      }`}
      onClick={activated ? () => {} : (() => {
        props.setDropActive(props.kkey);
      })}
    >
      <div className={style["drop"]}>
        <div className={style["drop__content"]}>
          <img src={food.img} alt={food.name}></img>
          <div className={style["name"]}>{food.name}</div>
          <div className={style["desc"]}>{food.description}</div>
          <Button2 btntype="add">Add</Button2>
          <Button2
            btntype="ccl"
            onClick={() => {
              props.setDropActive("0000");
            }}
          >
            X
          </Button2>
          <div className={style["price"]}>$ {food.price}</div>
        </div>
      </div>
      <span>
        <img src={food.img} alt={food.name}></img>
        <div className={style["name"]}>{food.name}</div>
      </span>
    </div>
  );
};

export default FoodCell;
