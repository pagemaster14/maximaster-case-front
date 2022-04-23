import "./Bio.css";
import avatar from "../../images/Avatar.svg";

function Bio(props) {
  return (
<div className="bio_container">
    <img src={avatar} alt="Аватар пользователя" className="bio__avatar"/>
    <p className="bio_info">ФИЛИПП КАРПОВ</p>
    <span className="bio__span">/</span>
    <p className="bio_info">ДИЗАЙН</p>
</div>
  );
}

export default Bio;