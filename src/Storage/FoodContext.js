import react from "react";
import images from "../assets/images/FoodImages/index"

const FoodContext = react.createContext({
  FoodData: [],
});

const FoodData = {
  "1001" : {
    row: 0,
    name: "Devil Fried Chicken",
    price: 5.99,
    description: "Taste the individual Devil Fried Chicken",
    img: images["1001"]
  },
  "1002" : {
    row: 0,
    name: "Angel Milkshake",
    price: 5.49,
    description: "As smooth as the angel's skin!",
    img: images["1002"]
  },
  "1003" : {
    row: 0,
    name: "Devil-Angel Combo",
    price: 5.49,
    description: "A duet from hell and heaven",
    img: images["1002"]
  },
  "2001" : {
    row: 1,
    name: "Original Fried chicken",
    price: 5.49,
    description: "Originals never boring",
    img: images["1002"]
  },
  "2002" : {
    row: 1,
    name: "Original Coca-cola",
    price: 5.49,
    description: "",
    img: images["1002"]
  },
  "3001" : {
    row: 2,
    name: "Boba Milk Tea",
    price: 5.49,
    description: "Milk tea with boba, mmm yummy",
    img: images["1002"]
  },
  "3002" : {
    row: 2,
    name: "Corn Chips",
    price: 5.49,
    description: "Triagles ",
    img: images["1002"]
  },
  "3003" : {
    row: 2,
    name: "Angel Milkshake",
    price: 5.49,
    description: "As smooth as the angel's skin!",
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
