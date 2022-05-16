import React from "react";
import "./EmployeeItem.css";
import avatar from "../../images/Avatar.svg";
import { Link } from "react-router-dom";

function EmployeeItem(props) {

    return (
        <Link className="employeeItem__link" to="/worker">
            <li className="employeeItem">
                <img src={avatar} alt="Аватар пользователя" className="employeeItem__avatar" />
                <div className="employeeItem__box">
                    <h2 className="employeeItem__title">{props.name}</h2>
                    <p className="employeeItem__text">Санкт-Петербург</p>
                </div>
                <div className="employeeItem__box">
                    <h2 className="employeeItem__title">Тимлид Дизайн</h2>
                    <p className="employeeItem__text">@PhilippKarpov</p>
                </div>
            </li>
            </Link>
    );
}

export default EmployeeItem;