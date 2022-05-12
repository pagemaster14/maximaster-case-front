import React from "react";
import "./Register.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";

function Register(props) {
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);

    function handleRegisterPopupOpen() {
        setIsRegisterPopupOpen(true);
      }

      function handleLoginPopupOpen() {
        setIsLoginPopupOpen(true);
      }
    
      function handlePopupClose() {
        setIsRegisterPopupOpen(false);
        setIsLoginPopupOpen(false);
      }
    
      React.useEffect(() => {
        const closeByEscape = (e) => {
          if (e.key === "Escape") {
            handlePopupClose();
          }
        };
        document.addEventListener("keydown", closeByEscape);
    
        return () => document.removeEventListener("keydown", closeByEscape);
      }, []);

    return (
        <>
            <Header handleLoginPopupOpen={handleLoginPopupOpen}/>
            <main className="register">
                <h1 className="register__title">UTAL - личный кабинет сотрудника</h1>
                <p className="register__text">• Управление задачами <br />
                    • Учёт рабочего времени <br />
                    • Карточка работника</p>
                <button className="register__openButton" arialabel="Open" onClick={handleRegisterPopupOpen}>Зарегистрироваться</button>
                <RegisterPopup isPopupOpen={isRegisterPopupOpen} handlePopupClose={handlePopupClose}/>
                <LoginPopup isPopupOpen={isLoginPopupOpen} handlePopupClose={handlePopupClose}/>
            </main>
            <Footer />
        </>
    );
}

export default Register;