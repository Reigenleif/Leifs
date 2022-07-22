import Header from "./Header";
import Foods from "./Foods";
import { useState } from "react";

const MainPage = (props) => {
  const [dropActive, setDropActive] = useState("0000");

  return (
    <div>
      <Header />
      <Foods
        dropActive={dropActive}
        setDropActive={(id) => setDropActive(id)}
      />
    </div>
  );
};

export default MainPage;
