import React from "react";
import "./Header.css";
import { Route} from "react-router-dom";
import logo from "../../images/Utal.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Utal" className="header__logo" />
      <Route exact path="/worker">
        <button className="header__button" arialabel="Open" onClick={props.handlePopupOpen}>Профиль</button>
        <button className="header__button">Выйти</button>
      </Route>
      <Route exact path="/supervisor">
        <button className="header__button" arialabel="Open" onClick={props.handlePopupOpen}>Профиль</button>
        <button className="header__button">Выйти</button>
      </Route>
      <Route exact path="/">
        <button className="header__navButton" onClick={props.handleLoginPopupOpen}>Войти</button>
      </Route>
    </header>
  );
}

export default Header;