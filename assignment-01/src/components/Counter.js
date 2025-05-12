import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCounter = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrementCounter = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.incrementCounter}>Increment Counter</button>
                <button onClick={this.decrementCounter}>Decrement Counter</button>
            </div>
        );
    }
}

export default Counter;