import "./InProgressCards.css";
import ActiveCard from "../ActiveCard/ActiveCard";

function InProgressCards(props) {
    return (
        <section className="inProgressCards">
            <h1 className="inProgressCards__name">Активно</h1>
            <ActiveCard />
        </section>
    );
}

export default InProgressCards;