import react, { useState, useContext } from "react";
import FoodContext from "./FoodContext";

const CartContext = react.createContext({
  cart: {},
  updateCart: () => {},
  getTotalCount: () => {},
  getTotalPrice: () => {},
  emptyCart: () => {}
});

export const CartContextProvider = (props) => {
  const Food = useContext(FoodContext).FoodData

  const [cart, setCart] = useState({
    
  });

  const updateCartHandler = (method, foodId) => {
    setCart((prevState) => {
      const newcart = {...prevState};
      if (!(foodId in newcart)) {
        newcart[foodId] = 0;
      }
      if (method === "add") {
        newcart[foodId] += 1;
      }
      if (method === "del") {
        newcart[foodId] -= 1;
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
    return Math.round(price*100)/100
  }

  const emptyCart = () => {
    setCart({})
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        updateCart: (method, foodId) => {
          updateCartHandler(method, foodId);
        },
        getTotalCount: getTotalCount,
        getTotalPrice: getTotalPrice,
        emptyCart: emptyCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
