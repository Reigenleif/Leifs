import style from "./FoodPopupAddButton.module.css"

const FoodPopupAddButton = (props) => {
    const children = props.children || []

    return <button {...props} className={`${props.className} ${style.add}`}>{children}</button>


}

export default FoodPopupAddButton