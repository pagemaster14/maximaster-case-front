import React from "react";
import "./ProfilePopup.css";
import avatar from "../../images/Avatar.svg";

function ProfilePopup(props) {
    return (
        <div className="profilePopup">
            <div className="profilePopup__container">
                <h2 className="profilePopup__login">philippka</h2>
                <button className="profilePopup__closeButton"></button>
                <div className="profilePopup__workInfo">
                    <img src={avatar} alt="Аватар пользователя" className="bio__avatar" />
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
                    <span className="profilePopup__info">Занимаюсь спортом Люблю футбол Всегда стараюсь выполнять работу вовремя</span>
                </ul>
                <p className="profilePopup__clock">21:45 мск</p>
                <h2 className="profilePopup__portfolio">Портфолио:</h2>
                <div className="profilePopup__portfolioContainer">

                </div>
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
    );
}

export default ProfilePopup;