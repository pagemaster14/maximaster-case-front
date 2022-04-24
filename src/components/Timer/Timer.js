import "./Timer.css";
import React from "react";

function Timer(props) {
  const [ seconds, setSeconds ] = React.useState(0);
  const [ minutes, setMinutes ] = React.useState(0);
  const [ hours, setHours ] = React.useState(0);
  const [ timerActive, setTimerActive ] = React.useState(false);

  React.useEffect(() => {
    if (timerActive) {
      setTimeout(setSeconds, 1000, seconds + 1);
      setTimeout(setMinutes, 1000 * 60, minutes + 1);
      setTimeout(setHours, 1000 * 60 * 60, hours + 1);
      if (seconds > 59) {
        setSeconds(0)
      }
      if (minutes > 59) {
        setMinutes(0)
      }
    } else {
      setTimerActive(false);
    }
  }, [ seconds, minutes, hours, timerActive ]);
  return (
    <>
<button className="timer" onClick={() => setTimerActive(!timerActive)}>{hours} ч {minutes} м {seconds} с</button>
    </>
  );
}

export default Timer;