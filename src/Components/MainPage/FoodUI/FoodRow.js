import FoodCell from "./FoodCell";
import style from "./FoodRow.module.css";
import { useMediaQuery } from "react-responsive"

const FoodRow = (props) => {
  const isMobile = useMediaQuery({query: "max-width: 640px"})
  const foodData = props.foodData;

  const rowContent = [];

  for (const key in foodData) {
    rowContent.push(<FoodCell key={key} kkey={key} food={foodData[key]} dropActive={props.dropActive} setDropActive={props.setDropActive}/>);
  }

  

  return (
    <div className={style["row-wrapper"]}>
      <div className={style["row-title"]}>{props.title}</div>
      <div className={style["row-content"]}>{rowContent}</div>
    </div>
  );
};

export default FoodRow;
