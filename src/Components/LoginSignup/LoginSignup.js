import Button from "../UI/Button";
import style from "./LoginSignup.module.css";
import AuthContext from "../../Storage/AuthContext";
import { useContext,useState } from "react";
import FormLabelInput from "../UI/FormLabelInput";

const LoginForm = (props) => {
  const Authctx = useContext(AuthContext);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const usernameBlurHandler = (event) => {
    const val = event.target.value 
    const allowed = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_"
    for (let i in val) {
      if (!(allowed.includes(val[i]))) {
        Authctx.triggerValidation("103")
        return
      }
    }
    Authctx.triggerValidation("100")
  }

  const passwordBlurHandler = (event) => {
    if (event.target.value.length < 8) {
      Authctx.triggerValidation("104")
      return
    }
    Authctx.triggerValidation("100")
  }


  const onLoginHandler = (event) => {
    event.preventDefault();
    Authctx.onLogin(username,password);
  };

  const onSignupHandler = (event) => {
    Authctx.onSignup(username,password)
  }


  return (
    <div className={style["container"]}>
      <div className={style["form-title"]}>Welcome!</div>
      <form className={style["form-control"]} onSubmit={onLoginHandler}>
        <FormLabelInput label="Username" value={username} onChange={usernameChangeHandler} onBlur={usernameBlurHandler}/>
        <FormLabelInput label="Password" inputType="password" value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}/>
        <div className={style["form-control-buttons-wrapper"]}>
          <div className={style["form-control-buttons"]}>
            <Button type="submit">
              Log In
            </Button>{" "}
            <span>OR</span> <Button onClick={onSignupHandler}>Sign Up</Button>
          </div>
        </div>
      </form>
      <div
        className={`${style["form-notif"]} ${
          Authctx.validation === "100" ? "" : style["invalid"]
        }`}
      > {`${Authctx.validation === "101"? "User Not Found" :
      Authctx.validation === "102" ? "Password doesn't match" : 
      Authctx.validation === "103" ? "Username must be letters and underscores" :
      Authctx.validation === "104" ? "Password must be more than 8 characters": ""} `}</div>
    </div>
  );
};

export default LoginForm;
