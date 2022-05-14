import react, { useState, useContext } from "react";
import FoodContext from "./FoodContext";

const CartContext = react.createContext({
  cart: {},
  updateCart: () => {},
  getTotalCount: () => {},
  getTotalPrice: () => {}
});

export const CartContextProvider = (props) => {
  const Food = useContext(FoodContext).FoodData

  const [cart, setCart] = useState({
    "1001": 1,
  });

  const updateCartHandler = (method, foodId) => {
    setCart((prevState) => {
      const newcart = prevState;
      if (!(foodId in newcart)) {
        cart[foodId] = 0;
      }
      if (method === "add") {
        cart[foodId] += 1;
      }
      if (method === "del") {
        cart[foodId] -= 1;
      }
      return newcart;
    });
  };

  const getTotalCount = () => {
    let count = 0
    for (let key in cart) { 
      count += cart[key]
    }
    return count
  }

  const getTotalPrice = () => {
    let price = 0
    for (let key in cart) {
      price += Food[key].price*cart[key]
    }
    return price
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        updateCart: (method, foodId) => {
          updateCartHandler(method, foodId);
        },
        getTotalCount: getTotalCount,
        getTotalPrice: getTotalPrice
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
