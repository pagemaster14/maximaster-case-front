import React from "react";
import "./LoginPopup.css";
import { Link } from "react-router-dom";

function LoginPopup(props) {

    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget && props.isPopupOpen) {
            props.handlePopupClose();
        }
    };

    return (
        <div className={`loginPopup ${props.isPopupOpen ? "loginPopup_opened" : ""}`} onMouseDown={handleOverlayClose} >
            <div className="loginPopup__container">
                <h2 className="loginPopup__title">Вход</h2>
                <button className="loginPopup__closeButton" arialabel="Close" onMouseDown={handleOverlayClose}></button>
                <form className="loginPopup__form">
                    <h3 className="loginPopup__formTitle">Логин</h3>
                    <input className="loginPopup__formInput"></input>
                    <h3 className="loginPopup__formTitle">Пароль</h3>
                    <input className="loginPopup__formInput"></input>
                    <Link to="/supervisor">
                        <button className="loginPopup__formSubmit">Войти</button>
                    </Link>
                </form>
            </div >
        </div >
    );
}

export default LoginPopup;