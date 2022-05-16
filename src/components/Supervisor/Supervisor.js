import React from "react";
import "./Supervisor.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ProfilePopup from "../ProfilePupup/ProfilePupup";
import EmployeeItem from "../EmployeeItem/EmployeeItem";

function Supervisor(props) {
    const [isProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
    const [isEmployeesDesignOpen, setIsEmployeesDesignOpen] = React.useState(false);
    const [isEmployeesAnalyticsOpen, setIsEmployeesAnalyticsOpen] = React.useState(false);
    const [isEmployeesProgrammingOpen, setIsEmployeesProgrammingOpen] = React.useState(false);
    const [isEmployeesMarketingOpen, setIsEmployeesMarketingOpen] = React.useState(false);
    const [isEmployeesProductOpen, setIsEmployeesProductOpen] = React.useState(false);
    const [isEmployeesManagementOpen, setIsEmployeesManagementOpen] = React.useState(false);

    function handleProfilePopupOpen() {
        setIsProfilePopupOpen(true);
    }

    function handlePopupClose() {
        setIsProfilePopupOpen(false);
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

    function handleEmployeesClose() {
        setIsEmployeesDesignOpen(false);
        setIsEmployeesAnalyticsOpen(false);
        setIsEmployeesProgrammingOpen(false);
        setIsEmployeesMarketingOpen(false);
        setIsEmployeesProductOpen(false);
        setIsEmployeesManagementOpen(false);
    }

    function handleEmployeesDesignOpen() {
        handleEmployeesClose()
        setIsEmployeesDesignOpen(true);
    }

    function handleEmployeesAnalyticsOpen() {
        handleEmployeesClose()
        setIsEmployeesAnalyticsOpen(true);
    }

    function handleEmployeesProgrammingOpen() {
        handleEmployeesClose()
        setIsEmployeesProgrammingOpen(true);
    }

    function handleEmployeesMarketingOpen() {
        handleEmployeesClose()
        setIsEmployeesMarketingOpen(true);
    }

    function handleEmployeesProductOpen() {
        handleEmployeesClose()
        setIsEmployeesProductOpen(true);
    }

    function handleEmployeesManagementOpen() {
        handleEmployeesClose()
        setIsEmployeesManagementOpen(true);
    }

    return (
        <>
            <Header handlePopupOpen={handleProfilePopupOpen} />
            <main className="supervisor">
                <Profile name="РУКОВОДИТЕЛЬ ДИЗАЙН" department="АЛЕКСАНДР ИВАНОВ" />
                <div className="supervisor__list">
                    <ul className="supervisor__listDepartments">
                        <ul className="supervisor__listDepartment" onClick={handleEmployeesDesignOpen}>ОТДЕЛ<br />ДИЗАЙНА</ul>
                        <div className={`supervisor__listItemContainer ${isEmployeesDesignOpen ? "supervisor__listItemContainer_opened" : ""}`}>
                            <EmployeeItem name="Филипп Карпов" />
                            <EmployeeItem name="Филипп Карпов" />
                            <EmployeeItem name="Филипп Карпов" />
                            <EmployeeItem name="Филипп Карпов" />
                        </div>
                        <ul className="supervisor__listDepartment" onClick={handleEmployeesAnalyticsOpen}>ОТДЕЛ<br />АНАЛИТИКИ</ul>
                        <div className={`supervisor__listItemContainer ${isEmployeesAnalyticsOpen ? "supervisor__listItemContainer_opened" : ""}`}>
                            <EmployeeItem name="Иван Аналитиков" />
                            <EmployeeItem name="Иван Аналитиков" />
                            <EmployeeItem name="Иван Аналитиков" />
                        </div>
                        <ul className="supervisor__listDepartment" onClick={handleEmployeesProgrammingOpen}>ОТДЕЛ<br />ПРОГРАММИРОВАНИЯ</ul>
                        <div className={`supervisor__listItemContainer ${isEmployeesProgrammingOpen ? "supervisor__listItemContainer_opened" : ""}`}>
                            <EmployeeItem name="Ловчев Сергей" />
                            <EmployeeItem name="Ловчев Сергей" />
                            <EmployeeItem name="Борзых Илья" />
                            <EmployeeItem name="Борзых Илья" />
                        </div>
                        <ul className="supervisor__listDepartment" onClick={handleEmployeesMarketingOpen}>ОТДЕЛ<br />МАРКЕТИНГА</ul>
                        <div className={`supervisor__listItemContainer ${isEmployeesMarketingOpen ? "supervisor__listItemContainer_opened" : ""}`}>
                            <EmployeeItem name="Василий Маркетингов" />
                            <EmployeeItem name="Василий Маркетингов" />
                        </div>
                        <ul className="supervisor__listDepartment" onClick={handleEmployeesProductOpen}>ПРОДУКТОВЫЙ<br />ОТДЕЛ</ul>
                        <div className={`supervisor__listItemContainer ${isEmployeesProductOpen ? "supervisor__listItemContainer_opened" : ""}`}>
                            <EmployeeItem name="Пётр Продуктовый" />
                            <EmployeeItem name="Пётр Продуктовый" />
                            <EmployeeItem name="Пётр Продуктовый" />
                            <EmployeeItem name="Пётр Продуктовый" />
                            <EmployeeItem name="Пётр Продуктовый" />
                        </div>
                        <ul className="supervisor__listDepartment" onClick={handleEmployeesManagementOpen}>ОТДЕЛ<br />МЕНЕДЖМЕНТА</ul>
                        <div className={`supervisor__listItemContainer ${isEmployeesManagementOpen ? "supervisor__listItemContainer_opened" : ""}`}>
                            <EmployeeItem name="Геннадий Менеджеров" />
                            <EmployeeItem name="Геннадий Менеджеров" />
                            <EmployeeItem name="Геннадий Менеджеров" />
                        </div>
                    </ul>
                </div>
            </main>
            <Footer />
            <ProfilePopup isPopupOpen={isProfilePopupOpen} handlePopupClose={handlePopupClose} />
        </>
    );
}

export default Supervisor;