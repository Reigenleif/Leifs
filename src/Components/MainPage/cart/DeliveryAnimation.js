import style from "./DeliveryAnimation.module.css"
import { useState, useEffect, useContext } from "react"
import PopupContext from "../../../Storage/PopupContext"

export default function DeliveryAnimation() {
    const PopupCtx = useContext(PopupContext)
    // State and logic for animation
    const [deliveryAnimationStage,setDeliveryAnimationStage] = useState(3)
    const [deliveryAnimationText,setDeliveryAnimationText] = useState("")

    useEffect(() => {
        if (deliveryAnimationStage === 3) {
            setDeliveryAnimationText(`Checkout Completed, Delivering in ${deliveryAnimationStage}`)
            setTimeout(() => {
                setDeliveryAnimationStage(deliveryAnimationStage - 1)
            },1000)
        } else if (deliveryAnimationStage > 0) {
            setDeliveryAnimationText(`Delivering in ${deliveryAnimationStage}`)
            setTimeout(() => {
                setDeliveryAnimationStage(deliveryAnimationStage - 1)
            },1000)
        } else {
            setDeliveryAnimationText("Food Delivered!")
            setTimeout(() => {
                PopupCtx.disablePopup()
            },1000)
        }
        return
    },[deliveryAnimationStage,PopupCtx])

    return <div className={style.loadContainer}>{deliveryAnimationText}</div>
}