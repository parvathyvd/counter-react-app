import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    
    render() { 
        return ( <div>
            <button className="btn btn-sm m-2 btn-success" onClick={this.props.onReset}>Reset</button>
           {this.props.counters.map(counter => {
               return <Counter 
               key= {counter.id}
               counter = {counter}
               onDelete={this.props.onDelete}
               onIncrement = {this.props.onIncrement}
               onReset = {this.props.onReset}
               />
           })}
        </div> );
    }
}
 
export default Counters;