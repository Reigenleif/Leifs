import react from "react";
import images from "./FoodImages/index"

const FoodContext = react.createContext({
  FoodData: [],
});

const FoodData = {
  "1001" : {
    row: 0,
    name: "Devil Fried Chicken",
    price: 5.99,
    Description: "Taste the individual Devil Fried Chicken",
    img: images["1001"]
  },
  "1002" : {
    row: 0,
    name: "Angel Milkshake",
    price: 5.49,
    Description: "As smooth as the angel's skin!",
    img: images["1002"]
  },

  //Method to filter the object by its row
  filterByRow : function(selectedRow) {
    let filtered = {}
    for (const key in this) {
      if (this[key].row === selectedRow) {
        filtered[key] = this[key]
      }
    }
    return filtered
  } 
}


export const FoodContextProvider = (props) => {
  return <FoodContext.Provider value={{
    FoodData: FoodData,
  }}>{props.children}</FoodContext.Provider>;
};

export default FoodContext;
