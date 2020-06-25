import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }

    render() {
        return (
            <p className="time"><span>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                </span> {this.state.date.toLocaleTimeString()}</p>
        );
    }
}

export default Clock;



