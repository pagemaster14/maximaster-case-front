import "./Clock.css";
import React, { Component } from "react";

class Clocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: new Date().getHours().toLocaleString(),
            minutes: new Date().getMinutes().toLocaleString(),
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            hours: new Date().getHours().toLocaleString(),
            minutes: new Date().getMinutes().toLocaleString(),
        });
    }
    render() {
        return <p className="appClock">{this.state.hours}:{this.state.minutes} мск</p>;
    }
}

export default Clocks;