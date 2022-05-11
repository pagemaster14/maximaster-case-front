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

    const [isRightButtonClicked, setIsRightButtonClicked] = React.useState(false);
    const [isLeftButtonClicked, setIsLeftButtonClicked] = React.useState(true);

    function handleRoleButtonClick() {
        setIsRightButtonClicked(!isRightButtonClicked);
        setIsLeftButtonClicked(!isLeftButtonClicked);
    }

    const roleButtoRightClassName = `registerPopup__roleButton ${isRightButtonClicked && "registerPopup__roleButton_active"
        }`;
    const roleButtonLeftClassName = `registerPopup__roleButton ${isLeftButtonClicked && "registerPopup__roleButton_active"}`;

    return (
        <div className={`registerPopup ${props.isPopupOpen ? "registerPopup_opened" : ""}`} onMouseDown={handleOverlayClose} >
            <div className="registerPopup__container">
                <h2 className="registerPopup__title">Регистрация</h2>
                <button className="registerPopup__closeButton" arialabel="Close" onMouseDown={handleOverlayClose}></button>
                <p className="registerPopup__subtitle">Кто вы?</p>
                <div className="registerPopup__buttonBox">
                    <button className={roleButtonLeftClassName} onMouseDown={handleRoleButtonClick}>Работник</button>
                    <button className={roleButtoRightClassName} onMouseDown={handleRoleButtonClick}>Руководитель</button>
                </div>
                <form className="registerPopup__form">
                    <h3 className="registerPopup__formTitle registerPopup__formName">ФИО</h3>
                    <input className="registerPopup__formInput registerPopup__formInputName"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formLogin">Логин</h3>
                    <input className="registerPopup__formInput registerPopup__formInputLogin"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formPassword">Пароль</h3>
                    <input className="registerPopup__formInput registerPopup__formInputPassword"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formTelefon">Телефон</h3>
                    <input className="registerPopup__formInput registerPopup__formInputTelefon"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formEmail">Почта</h3>
                    <input className="registerPopup__formInput registerPopup__formInputEmail"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formCity">Город</h3>
                    <input className="registerPopup__formInput registerPopup__formInputCity"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formTimeZone">Часовой пояс</h3>
                    <input className="registerPopup__formInput registerPopup__formInputTimeZone"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formBirth">Дата рождения</h3>
                    <input className="registerPopup__formInput registerPopup__formInputBirth"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formTelegram">Ник в Telegram</h3>
                    <input className="registerPopup__formInput registerPopup__formInputTelegram"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formBio">О себе</h3>
                    <textarea className="registerPopup__formInput registerPopup__formInputBio"></textarea>
                    <h3 className="registerPopup__formTitle registerPopup__formPosition">Должность</h3>
                    <input className="registerPopup__formInput registerPopup__formInputPosition"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formDepartment">Отдел</h3>
                    <input className="registerPopup__formInput registerPopup__formInputDepartment"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formChief">Руководитель</h3>
                    <input className="registerPopup__formInput registerPopup__formInputChief"></input>
                    <h3 className="registerPopup__formTitle registerPopup__formPortfolioTitle">Добавить портфолио</h3>
                    <div className="registerPopup__formPortfolio">
                        <img src={addAvatar} alt="Добавить аватар" className="registerPopup__formPortfolioAvatar" />
                        <button className="registerPopup__formPortfolioAvatarAdd"></button>
                        <div className="registerPopup__formPortfolioProjectBox">
                            <div className="registerPopup__formPortfolioProject">
                                <button className="registerPopup__formPortfolioProjectButton"></button>
                            </div>
                            <div className="registerPopup__formPortfolioProject">
                                <button className="registerPopup__formPortfolioProjectButton"></button>
                            </div>
                            <div className="registerPopup__formPortfolioProject">
                                <button className="registerPopup__formPortfolioProjectButton"></button>
                            </div>
                        </div>
                    </div>
                    <div className="registerPopup__formPortfolioCheckboxContainer">
                    <input className="registerPopup__formPortfolioCheckbox" type="checkbox"></input>
                    <p className="registerPopup__formPortfolioAgreement">Я принимаю условия Пользовательского соглашения и даю своё согласие Utal на обработку моей персональной информации</p>
                    </div>
                    <Link to="/">
                        <button className="registerPopup__formSubmit">Зарегистрироваться</button>
                    </Link>
                </form>
            </div >
        </div >
    );
}

export default RegisterPopup;