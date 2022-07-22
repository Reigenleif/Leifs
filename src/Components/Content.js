import { useContext } from "react";
import AuthContext from "../Storage/AuthContext";
import LoginSignup from "./LoginSignup/LoginSignup";
import MainPage from "./MainPage/MainPage";
import style from "./Content.module.css"
import PopupContext from "../Storage/PopupContext";

const Content = (props) => {
  const Authctx = useContext(AuthContext)
  const PopupIsActive = useContext(PopupContext).isActive
  
  function scrollHandler() {
    console.log('dasda')
  }

  return (
    <div className={`${style["content-container"]} ${PopupIsActive && style.disablescroll}`} onScroll={scrollHandler}>
      {Authctx.isLoggedIn ? <MainPage /> : <LoginSignup />}
    </div>
  );
};

export default Content
