import "./ActiveCard.css";

function ActiveCard(props) {
  return (
    <div className="activeCard">
        <div className="activeCard__container">
          <div className="timer__container">
            <p className="timer__clock">1 ч 45 м</p>
            <button className="timer__button"></button>
          </div>
        <p className="activeCard__executor">Исполнитель: Филипп Карпов</p>
        <h2 className="activeCard__name">Дизайн-концепт макета для Сбера</h2>
        <p className="activeCard__description">Сделать 5 экранов мобильного приложения в Figma Отправить на проверку клиенту 3 варианта Доработать 1 правку по иконкам
Ответить Даниле, что нужно сделать то и то</p>
        <p className="activeCard__creator">Назначил: Илья Кочиков</p>
        <p className="activeCard__deadline">До: 23:00 22.04.22</p>
        <button className="activeCard__button">Выполнено</button>
        </div>
    </div>
  );
}

export default ActiveCard;