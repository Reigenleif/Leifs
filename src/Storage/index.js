import { AuthContextProvider } from "./AuthContext";
import { CartContextProvider } from "./CartContext";
import { FoodContextProvider } from "./FoodContext";
import { PopupContextProvider } from "./PopupContext";

export default function ContextProviders(props) {
  return (
    <AuthContextProvider>
      <FoodContextProvider>
        <CartContextProvider>
          <PopupContextProvider>
            {props.children}
            </PopupContextProvider>
        </CartContextProvider>
      </FoodContextProvider>
    </AuthContextProvider>
  );
}
