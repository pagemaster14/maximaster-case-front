import "./InitialCards.css";
import Card from "../Card/Card";

function InitialCards(props) {
    return (
        
        <section className="initialCards">
            <h1 className="initialCards__name">Назначено</h1>
            <Card />
            <Card />
        </section>
        
    );
}

export default InitialCards;