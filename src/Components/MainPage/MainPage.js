import Header from "./Header";
import { FoodContextProvider } from "../../Storage/FoodContext";
import Foods from "./Foods";

const MainPage = (props) => {
  return (
    <div>
      <Header />
      <FoodContextProvider>
        <Foods />
      </FoodContextProvider>
    </div>
  );
};

export default MainPage;
