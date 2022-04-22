import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style["header"]}>
      <div className={style["title"]}>Leif's</div>
      <div className={style["content"]}>
        {"Leif's is not just a fast food restaurant! We deliver foods INSTANTLY. Taste our newest Devil Fried Chicken and your mouth will probably blazed. Neutralize the effect by our delicate angel milkshake. get both for only $9.99"}
      </div>
    </div>
  );
};

export default Header;
