import style from "./FoodCell.module.css";

const FoodCell = (props) => {
  const food = props.food;

  return (
    <div className={style["img-wrapper"]}>
      <img src={food.img} alt={food.name}></img>
      <div className={style["name"]}>{food.name}</div>
    </div>
  );
};

export default FoodCell;
