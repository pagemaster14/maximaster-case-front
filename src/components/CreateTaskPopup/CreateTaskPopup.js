import React from "react";
import "./CreateTaskPopup.css";
import avatar from "../../images/Avatar.svg";

function CreateTaskPopup(props) {

    return (
        <div className={`createTaskPopup ${props.isPopupOpen ? "createTaskPopup_opened" : ""}`} onMouseDown={props.handleOverlayClose}>
            <div className="createTaskPopup__container">
                <h2 className="createTaskPopup__task">Новая задача</h2>
                <button className="createTaskPopup__closeButton" arialabel="Close" onMouseDown={props.handleOverlayClose}></button>
                <div className="createTaskPopup__info">
                    <img src={avatar} alt="Аватар пользователя" className="createTaskPopup__avatar" />
                    <p className="createTaskPopup__name">Филипп Карпов</p>
                    <p className="createTaskPopup__sity">Санкт-Петербург</p>
                </div>
                <div className="createTaskPopup__deadline">
                    <h2 className="createTaskPopup__deadlineHeader">Срок сдачи</h2>
                    <p className="createTaskPopup__deadlineTime">19:00 мск</p>
                    <p className="createTaskPopup__deadlineDate">28.04.2022</p>
                </div>
                <form className="form">
                    <h2 className="form__header">Название задачи</h2>
                    <input className="form__input" name="name"
                        type="name"
                        required
                        minLength="2"
                        maxLength="40"></input>
                    <h2 className="form__header">Описание задачи</h2>
                    <input className="form__input" name="description"
                        type="description"
                        required
                        minLength="2"
                        maxLength="40"></input>
                </form>
                <div className="createTaskPopup__creator">
                    <h2 className="createTaskPopup__creatorHeader">Руководитель</h2>
                    <p className="createTaskPopup__creatorText">Филипп Карпов</p>
                    <h2 className="createTaskPopup__creatorHeader">Отдел</h2>
                    <p className="createTaskPopup__creatorText">Отдел дизайна</p>
                </div>
            </div>
        </div >
    );
}

export default CreateTaskPopup;