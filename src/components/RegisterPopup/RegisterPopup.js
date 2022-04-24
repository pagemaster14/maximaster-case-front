import React from "react";
import "./RegisterPopup.css";
import addAvatar from "../../images/Addavatar.svg";
import { Link } from "react-router-dom";

function RegisterPopup(props) {

      const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget && props.isPopupOpen) {
            props.handlePopupClose();
        }
    };

    return (
        <div className={`registerPopup ${props.isPopupOpen ? "registerPopup_opened" : ""}`} onMouseDown={handleOverlayClose} >
            <div className="registerPopup__container">
                <h2 className="registerPopup__title">Регистрация</h2>
                <button className="registerPopup__closeButton" arialabel="Close" onMouseDown={handleOverlayClose}></button>
                <p className="registerPopup__subtitle">Кто вы?</p>
                <div className="registerPopup__buttonBox">
                    <button className="registerPopup__roleButton">Работник</button>
                    <button className="registerPopup__roleButton">Руководитель</button>
                </div>
                <form className="registerPopup__form">
                    <h3 className="registerPopup__formName">ФИО</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formLogin">Логин</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formPassword">Пароль</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formTelefon">Телефон</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formEmail">Почта</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formCity">Город</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formTimeZone">Часовой пояс</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formBirth">Дата рождения</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formTelegram">Ник в Telegram</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formBio">О себе</h3>
                    <textarea className="registerPopup__formInput"></textarea>
                    <h3 className="registerPopup__formPosition">Должность</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formDepartment">Отдел</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formChief">Руководитель</h3>
                    <input className="registerPopup__formInput"></input>
                    <h3 className="registerPopup__formPortfolioTitle">Добавить портфолио</h3>
                    <div className="registerPopup__formPortfolio">
                        <img src={addAvatar} alt="Добавить аватар" className="registerPopup__formPortfolioAvatar" />
                        <button className="registerPopup__formPortfolioAvatarAdd"></button>
                        <div className="registerPopup__formPortfolioProject"></div>
                        <button className="registerPopup__formPortfolioProjectButton"></button>
                        <div className="registerPopup__formPortfolioProject"></div>
                        <button className="registerPopup__formPortfolioProjectButton"></button>
                        <div className="registerPopup__formPortfolioProject"></div>
                        <button className="registerPopup__formPortfolioProjectButton"></button>
                    </div>
                    <input className="registerPopup__formPortfolioCheckbox" type="checkbox"></input>
                    <p className="registerPopup__formPortfolioAgreement">Я принимаю условия Пользовательского соглашения и даю своё согласие Utal на обработку моей персональной информации</p>
                    <Link to="/">
                    <button className="registerPopup__formSubmit">Зарегистрироваться</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default RegisterPopup;