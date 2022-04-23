import "./Cards.css";
import InitialCards from "../InitialCards/InitialCards";
import InProgressCards from "../InProgressCards/InProgressCards";
import DoneCards from "../DoneCards/DoneCards";

function Cards(props) {
    return (
        <section className="cards">
            <InProgressCards />
            <DoneCards />
            <InitialCards />
        </section>
    );
}

export default Cards;