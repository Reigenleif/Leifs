import style from "./PopupHandler.module.css";
import reactDOM from "react-dom";
import { useContext } from "react";
import PopupContext from "../../Storage/PopupContext";

const PopupHandler = (props) => {
  const PopupCtx = useContext(PopupContext);

  function disablePopupHandler() {
    PopupCtx.disablePopup();
  }

  const PopupContent = PopupCtx.content;
  const PopupIsActive = PopupCtx.isActive;

  if (!PopupIsActive) {
    return;
  }

  const allContent = (
    <div className={style.container}>
      <div className={style.dropdown} onClick={disablePopupHandler} />
      <div className={style.wrapper}>{PopupContent}</div>
    </div>
  );

  return reactDOM.createPortal(allContent, document.getElementById("popup"));
};

export default PopupHandler;
