import style from "./App.module.css";
import Navbar from "./Components/UI/NavBar";
import Content from "./Components/Content";
import ContextProviders from "./Storage";
import PopupHandler from "./Components/UI/PopupHandler";

function App() {
  return (
    <ContextProviders>
      <div className={`${style.main} `}>
        <Navbar />
        <Content />
        <PopupHandler/>
      </div>
    </ContextProviders>
  );
}

export default App;
