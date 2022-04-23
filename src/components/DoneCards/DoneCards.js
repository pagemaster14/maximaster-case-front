import "./DoneCards.css";
import Card from "../Card/Card";

function DoneCards(props) {
    return (
        <section className="doneCards">
            <h1 className="doneCards__name">Выполнено</h1>
            <Card />
            <Card />
            <Card />
        </section>
    );
}

export default DoneCards;