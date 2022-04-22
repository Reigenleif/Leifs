import FoodCell from "./FoodCell";
import style from "./FoodRow.module.css";

const FoodRow = (props) => {
  const foodData = props.foodData;

  const rowContent = [];

  for (const key in foodData) {
    rowContent.push(<FoodCell key={foodData[key].name} food={foodData[key]} />);
  }

  return (
    <div className={style["row-wrapper"]}>
      <div className={style["row-title"]}>{props.title}</div>
      <div className={style["row-content"]}>{rowContent}</div>
    </div>
  );
};

export default FoodRow;
