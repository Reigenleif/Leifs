import style from "./PopupHandler.module.css"
import reactDOM from "react-dom"

const PopupHandler = props => {
    const PopupContent = <div className={`${style["dropdown"]} ${props.activated && style["activated"]}`}>
        {props.children}
    </div>

    return reactDOM.createPortal(PopupContent, document.getElementById("popup"))
}

export default PopupHandler