import style from "./App.module.css";
import Navbar from "./Components/UI/NavBar";
import {AuthContextProvider} from "./Storage/AuthContext";
import Content from "./Components/Content";

function App() {

  return (
    <AuthContextProvider>
      <div className={style.main}>
        <Navbar/>
        <Content/>
      </div>
    </AuthContextProvider>
  );
}

export default App;
