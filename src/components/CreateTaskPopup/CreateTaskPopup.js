import React from "react";
import "./CreateTaskPopup.css";
import avatar from "../../images/Avatar.svg";

function CreateTaskPopup(props) {
    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget && props.isPopupOpen) {
            props.handlePopupClose();
        }
    };

    return (
        <div className={`createTaskPopup ${props.isPopupOpen ? "createTaskPopup_opened" : ""}`} onMouseDown={handleOverlayClose}>
            <div className="createTaskPopup__container">
                <h2 className="createTaskPopup__task">Новая задача</h2>
                <button className="createTaskPopup__closeButton" arialabel="Close" onMouseDown={handleOverlayClose}></button>
                <div className="createTaskPopup__info">
                    <img src={avatar} alt="Аватар пользователя" className="createTaskPopup__avatar" />
                    <p className="createTaskPopup__name">Филипп Карпов</p>
                    <p className="createTaskPopup__city">Санкт-Петербург</p>
                </div>
                <div className="createTaskPopup__deadline">
                    <h2 className="createTaskPopup__deadlineHeader">Срок сдачи</h2>
                    <p className="createTaskPopup__deadlineTime">19:00 мск</p>
                    <p className="createTaskPopup__deadlineDate">28.04.2022</p>
                </div>
                <form className="form">
                    <h2 className="form__header">Название задачи</h2>
                    <textarea cols="40" rows="5" className="form__textarea" name="name"
                        type="text"
                        required
                        minLength="2"></textarea>
                    <h2 className="form__header">Описание задачи</h2>
                    <textarea cols="40" rows="5" className="form__textarea" name="description"
                        type="text"
                        required
                        minLength="2"></textarea>
                </form>
                <div className="createTaskPopup__creator">
                    <h2 className="createTaskPopup__creatorHeader">Руководитель:</h2>
                    <p className="createTaskPopup__creatorText">Филипп Карпов</p>
                    <h2 className="createTaskPopup__creatorHeader">Отдел:</h2>
                    <p className="createTaskPopup__creatorText">Отдел дизайна</p>
                </div>
            </div>
        </div >
    );
}

export default CreateTaskPopup;