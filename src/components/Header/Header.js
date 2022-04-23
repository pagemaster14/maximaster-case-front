import "./Header.css";
import logo from "../../images/Utal.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Utal" className="header__logo" />
      <button className="header__button">Профиль</button>
      <button className="header__button">Выйти</button>
    </header>
  );
}

export default Header;