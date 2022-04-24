import React from "react";
import "./Header.css";
import { Route, Link } from "react-router-dom";
import logo from "../../images/Utal.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Utal" className="header__logo" />
      <Route exact path="/">
      <button className="header__button" arialabel="Open" onClick={props.handlePopupOpen}>Профиль</button>
      <button className="header__button">Выйти</button>
      </Route>
      <Route exact path="/signup">
      <Link to="/">
      <button className="header__navButton">Войти</button>
      </Link>
      </Route>
    </header>
  );
}

export default Header;