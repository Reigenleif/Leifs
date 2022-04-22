import FoodContext from "../../Storage/FoodContext"
import { useContext } from "react"
import FoodRow from "./FoodUI/FoodRow"
import style from"./Foods.module.css"

const RowNames = [
    "Devil-Angle Combo"
]


const Foods = props => {
    const Foodctx = useContext(FoodContext)
    const foodData = Foodctx.FoodData

    const Rows = RowNames.map((name,index) => {
        // Filtering foods in every row then getting their ids 
        const rowFoodData = foodData.filterByRow(index)

        // convert the array of ids to FoodRow component 
        return <FoodRow key={index} foodData={rowFoodData} title={name}/>
    })

    return <div className={style["foods-wrapper"]}>{Rows}</div>
        
}

export default Foods
