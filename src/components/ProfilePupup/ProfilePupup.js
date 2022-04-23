import React from "react";
import "./ProfilePopup.css";
import avatar from "../../images/Avatar.svg";
import Clocks from "../Clock/Clock";

function ProfilePopup(props) {
    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget && props.isPopupOpen) {
            props.handlePopupClose();
        }
    };
    return (
        <div className={`profilePopup ${props.isPopupOpen ? "profilePopup_opened" : ""}`} onMouseDown={handleOverlayClose}>
            <div className="profilePopup__container">
                <h2 className="profilePopup__login">philippka</h2>
                <button className="profilePopup__closeButton" arialabel="Close" onMouseDown={handleOverlayClose}></button>
                <div className="profilePopup__workInfo">
                    <img src={avatar} alt="Аватар пользователя" className="profilePopup__avatar" />
                    <p className="profilePopup__position">Тимлид Дизайн</p>
                    <p className="profilePopup__department">Отдел Дизайна</p>
                    <p className="profilePopup__chief">Александр Кантемиров</p>
                </div>
                <ul className="profilePopup__personalInfo">
                    <li className="profilePopup__name">Филипп Карпов</li>
                    <span className="profilePopup__sity">Санкт-Петербург</span>
                    <li className="profilePopup__email">karpov@utal.ru</li>
                    <li className="profilePopup__number">+7 999 666 33 00</li>
                    <li className="profilePopup__telegram">Telegram: @PhilippKarpov</li>
                    <li className="profilePopup__info">О себе:</li>
                    <li className="profilePopup__infoSpan">Занимаюсь спортом Люблю футбол Всегда стараюсь выполнять работу вовремя</li>
                </ul>
                <div className="profilePopup__clock">
                    <Clocks />
                </div>
                <h2 className="profilePopup__portfolio">Портфолио:</h2>
                <div className="profilePopup__portfolioContainer">
                    <div className="profilePopup__portfolioBlock"></div>
                    <div className="profilePopup__portfolioBlock"></div>
                    <div className="profilePopup__portfolioBlock"></div>
                    <div className="profilePopup__portfolioBlock"></div>
                    <div className="profilePopup__portfolioBlock"></div>
                    <div className="profilePopup__portfolioBlock"></div>
                    <div className="profilePopup__portfolioBlock"></div>
                    <div className="profilePopup__portfolioBlock"></div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePopup;