import style from "./FoodPopupCancelButton.module.css"

const FoodPopupCancelButton = (props) => {
    const children = props.children || []

    return <button {...props} className={`${props.className} ${style.cancel}`}>{children}</button>


}

export default FoodPopupCancelButton