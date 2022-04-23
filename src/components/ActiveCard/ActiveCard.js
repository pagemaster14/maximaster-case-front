import "./ActiveCard.css";

function ActiveCard(props) {
  return (
    <div className="activeCard">
        <div className="activeCard__container">
        <p className="activeCard__executor">Исполнитель: Филипп Карпов</p>
        <h2 className="activeCard__name">Дизайн-концепт макета для Сбера</h2>
        <p className="activeCard__creator">Назначил: Илья Кочиков</p>
        <button className="activeCard__button"></button>
        </div>
    </div>
  );
}

export default ActiveCard;