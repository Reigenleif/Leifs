import { useContext } from "react";
import AuthContext from "../../Storage/AuthContext";
import Button from "./Button";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  const AuthCtx = useContext(AuthContext)
  return (
    <div className={style["navbar-bar"]}>
      <div className={style["navbar-textcontainer"]}>Leif's</div>
      {!AuthCtx.isLoggedIn || <Button onClick={AuthCtx.onLogout} className={style["profile-btn"]}>Logout</Button>}
    </div>
  );
};

export default Navbar;
