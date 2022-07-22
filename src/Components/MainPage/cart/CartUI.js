import { useContext } from "react";
import PopupContext from "../../../Storage/PopupContext";
import style from "./CartUI.module.css";
import CheckoutUI from "./CheckoutUI";

const CartUI = (props) => {
  const PopupCtx = useContext(PopupContext)
  const menulist = props.menulist;
  const totals = props.totals;
  const content = Object.keys(menulist).map((key) => {
    return (
      <tr key={key}>
        <th className={style["cart-popup__cell__menu"]}>
          {menulist[key].name}
        </th>
        <th className={style["cart-popup__cell__count"]}>
          {menulist[key].count}
        </th>
        <th className={style["cart-popup__cell__price"]}>
          <span className={style["dollar-sign__cell"]}>$</span>{" "}
          {menulist[key].price}
        </th>
      </tr>
    );
  });

  function checkoutToggleHadler() {
    PopupCtx.triggerPopup(<CheckoutUI total={totals.price}/>)
  }

  return (
      <div className={style["cart-popup"]}>
        <div className={style["cart-popup__title"]}>CHECKOUT CART</div>
        <table className={style["cart-popup__table"]}>
          <thead className={style["cart-popup__tblheader"]}>
            <tr>
              <th className={style["cart-popup__cell__menu"]}>Menu</th>
              <th className={style["cart-popup__cell__count"]}>Count</th>
              <th className={style["cart-popup__cell__price"]}>
                Price <span className={style["dollar-sign__header"]}>($)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {content}
            <tr className={style["total"]}>
              <th>Total</th>
              <th>{totals.count}</th>
              <th>
                {" "}
                <span className={style["dollar-sign__cell"]}>$ </span>
                {totals.price}
              </th>
            </tr>
          </tbody>
        </table>
        <div className={style["btn-wrapper"]}>
          <button className={style["btn-checkout"]} onClick={checkoutToggleHadler}>Checkout</button>
        </div>
      </div>
  );
};

export default CartUI;
