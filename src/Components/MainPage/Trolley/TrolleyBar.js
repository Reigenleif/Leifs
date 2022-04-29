import ReactDOM from "react-dom";
import style from "./TrolleyBar.module.css"

const TrolleyBar = props => {
    const content = <div className={style["trolley-bar"]}>

    </div>

    return ReactDOM.createPortal(content,document.getElementById("root2"))
}

export default TrolleyBar