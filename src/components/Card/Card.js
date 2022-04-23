import "./Card.css";

function Card(props) {
  return (
    <div className="card">
        <div className="card__container">
        <p className="card__executor">Исполнитель: Филипп Карпов</p>
        <h2 className="card__name">Дизайн-концепт макета для Сбера</h2>
        <p className="card__creator">Назначил: Илья Кочиков</p>
        </div>
    </div>
  );
}

export default Card;