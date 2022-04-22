import buttonStyle from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${buttonStyle["button"]} ${props.className}`} onClick={props.onClick} >
      <div className={buttonStyle["text-container"]} style={{...props.style ,textAlign:"center"}}>{props.children}</div>
    </button>
  );
};

export default Button;
