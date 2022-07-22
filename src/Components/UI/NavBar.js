import { useContext, useState } from "react";
import AuthContext from "../../Storage/AuthContext";
import CartBar from "../MainPage/cart/CartBar";
import Button from "./Button";
import style from "./Navbar.module.css";
import cartIcon from "../../assets/images/cart.png";
import hamburger from "../../assets/images/hamburger.png";
import CartBarMobile from "../MainPage/cart/CartBarMobile";
import PopupContext from "../../Storage/PopupContext";

const Navbar = (props) => {
  const [cartBarIsActive, setCartBarIsActive] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const {triggerPopup} = useContext(PopupContext)

  function cartUiToggleHandler() {
    setCartBarIsActive(!cartBarIsActive);
  }

  function cartUiMobileToggleHandler() {
    triggerPopup(<CartBarMobile/>)
  }

  return (
    <div className={style.wrapper}>
      <div className={style["navbar-bar"]}>
        {/* Desktop Controls*/}
        <div className={style["navbar-textcontainer"]}>Leif's</div>
        {!AuthCtx.isLoggedIn || (
          <div className={style["btns"]}>
            <Button className={style["btn-cart"]} onClick={cartUiToggleHandler}>
              <img alt="cart-logo" src={cartIcon} />
            </Button>
            <Button onClick={AuthCtx.onLogout} className={style["btn-logout"]}>
              Logout
            </Button>
          </div>
        )}

        {/* Mobile Controls*/}
        <div className={style["btn-menu"]}>
          <button onClick={cartUiToggleHandler}>
            <img className={style.hamburger} src={hamburger} alt="Hamburger"/>
          </button>
        </div>
      </div>

      <div className={`${style.cartBar} ${cartBarIsActive && style.activated}`}>
        <CartBar />
      </div>
      <div className={`${style["btns-mobile"]} ${cartBarIsActive && style.activated}`}>
          <button className={style["btn-mycart"]} onClick={cartUiMobileToggleHandler}>My Cart</button>
          <button className={style["btn-logout2"]} onClick={AuthCtx.onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
