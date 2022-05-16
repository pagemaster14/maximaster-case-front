import "./Bio.css";
import avatar from "../../images/Avatar.svg";
import { Route } from "react-router-dom";

function Bio(props) {
  return (
    <div className="bio_container">
      <Route exact path="/">
        <img src={avatar} alt="Аватар пользователя" className="bio__avatar" />
      </Route>
      <p className="bio_info">{props.name}</p>
      <span className="bio__span">/</span>
      <p className="bio_info">{props.department}</p>
    </div>
  );
}

export default Bio;