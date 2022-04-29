import Header from "./Header";
import { FoodContextProvider } from "../../Storage/FoodContext";
import Foods from "./Foods";
import TrolleyBar from "./Trolley/TrolleyBar";
import { useState } from "react";

const MainPage = (props) => {
  const [dropActive, setDropActive] = useState("0000")

  const toggleDropActive = id => {
    setDropActive((prevState) => {
      if (prevState === id) {
        return ("0000")
      }
      return id
    })
  }

  return (
    <div>
      <Header />
      <FoodContextProvider>
        <Foods dropActive={dropActive} setDropActive={(id) => setDropActive(id)}/>
        <TrolleyBar/>
      </FoodContextProvider>
    </div>
  );
};

export default MainPage;
