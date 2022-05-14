import { useContext } from "react";
import AuthContext from "../Storage/AuthContext";
import LoginSignup from "./LoginSignup/LoginSignup";
import MainPage from "./MainPage/MainPage";
import style from "./Content.module.css"

const Content = (props) => {
    const Authctx = useContext(AuthContext)
    
  return (
    <div className={style["content-container"]}>
      {Authctx.isLoggedIn ? <MainPage /> : <LoginSignup />}
    </div>
  );
};

export default Content
