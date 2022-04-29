import react, { useContext } from "react";

const CartContext = react.createContext(
    []
)

const CartContextProvider = props => {
    return <CartContext.Provider> {props.children} </CartContext.Provider>
    
}