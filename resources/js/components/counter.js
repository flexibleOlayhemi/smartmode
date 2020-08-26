import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state =  {counter : 0}

        this.Up = this.Up.bind(this);
        this.Down = this.Down.bind(this);
    }
    Up(){
            let count =  this.state.counter;
            count++;
            this.setState(
                {counter : count }
            )
    }

    Down(){
        let count = this.state.counter;
        count--;
        this.setState(
                {counter : count}
            );

    }
    render(){
        return(
            <div>
                <h1>That</h1>
                <p> Counts : {this.state.counter} </p>
                <button className="btn-success p-2 ml-2 " onClick={this.Up}> + </button>
                <button className="btn-primary p-2" onClick={this.Down}> - </button>
            </div>
        )
    }
}

export default Counter;

if (document.getElementById('example')) {
    ReactDOM.render(<Counter />, document.getElementById('example'));
}

