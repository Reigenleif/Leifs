import react from "react"
import buttonstyle from "./Button2.module.css"

// add and ccl type
const Button2 = props => {
    const children = props.children || []
    
    return react.createElement('button',{...props,className:`${buttonstyle["btn"]} ${buttonstyle[props.btntype]} ${props.className}`},children)
}

export default Button2