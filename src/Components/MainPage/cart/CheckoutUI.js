import { useContext } from "react"
import CartContext from "../../../Storage/CartContext"
import PopupContext from "../../../Storage/PopupContext"
import style from "./CheckoutUI.module.css"
import DeliveryAnimation from "./DeliveryAnimation"

const CheckoutUI = props => {
    const PopupCtx = useContext(PopupContext)
    const CartCtx = useContext(CartContext)
        
    function yesHandler() {
        CartCtx.emptyCart()
        PopupCtx.triggerPopup(<DeliveryAnimation/>)
    }

    return <div className={style["wrapper"]}>
        <div className={style["container"]}>
            <h1 className={style["title"]}>
                Checkout order? 
            </h1>
            <h1 className={style["price"]}>
                $ {props.total}
            </h1>
            <button className={style['btn-yes']} onClick={yesHandler}>Yes</button>
            <button className={style['btn-no']} onClick={PopupCtx.disablePopup}>No</button>
        </div>

    </div>
}

export default CheckoutUI