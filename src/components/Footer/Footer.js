import "./Footer.css";
import logo from "../../images/Utal grey.svg";

function Footer(props) {
    return (
<footer className="footer">
    <p className="footer__copywright">© Copywright</p>
    <p className="footer__year">2022</p>
    <img src={logo} alt="Логотип Utal" className="footer__logo" />
</footer>
    );
  }
  
  export default Footer;