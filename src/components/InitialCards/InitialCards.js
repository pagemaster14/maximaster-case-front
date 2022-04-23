import "./InitialCards.css";
import Card from "../Card/Card";

function InitialCards(props) {
    return (
        <section className="initialCards">
            <Card />
            <Card />
        </section>
    );
}

export default InitialCards;