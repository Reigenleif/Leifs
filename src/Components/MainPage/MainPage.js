import Header from "./Header";
import { FoodContextProvider } from "../../Storage/FoodContext";
import Foods from "./Foods";
import TrolleyBar from "./Trolley/TrolleyBar";
import { useState } from "react";
import { CartContextProvider } from "../../Storage/CartContext";

const MainPage = (props) => {
  const [dropActive, setDropActive] = useState("0000");

  return (
    <div>
      <Header />
      <FoodContextProvider>
        <CartContextProvider>
          <Foods
            dropActive={dropActive}
            setDropActive={(id) => setDropActive(id)}
          />
          <TrolleyBar />
        </CartContextProvider>
      </FoodContextProvider>
    </div>
  );
};

export default MainPage;
