import style from "./FormLabelInput.module.css";

const FormLabelInput = (props) => {
  return (
    <div className={style["form-label-input"]}>
      <label className={`${props.labelClassName}`}>{props.label} </label>
      <input
        type={props.inputType}
        className={`${props.inputClassName}`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
    </div>
  );
};

export default FormLabelInput;
