import "./InProgressCards.css";
import Card from "../Card/Card";

function InProgressCards(props) {
    return (
        <section className="inProgressCards">
            <Card />
            <Card />
            <Card />
        </section>
    );
}

export default InProgressCards;