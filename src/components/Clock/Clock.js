import "./Clock.css";
import React from "react";

function Clocks()  {

    return (
        <p className="appClock">{ new Date().toLocaleTimeString().slice(0, 5) } мск</p>
    )
}

setInterval(Clocks, 1000);

export default Clocks;