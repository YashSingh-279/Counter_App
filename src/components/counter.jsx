//import classes from '*.module.css';
import React, { Component } from 'react'
class Counter extends Component {
    

     // constructor(){
       //   super();
        // this.handleIncrement=this.handleIncrement.bind(this);
      //}
      
      
      
    render() { 
      
        
        
     
        return (
             <div>
           
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
             onClick={() => this.props.onIncrement(this.props.counter)}
              className ="btn btn-outline-success">Increment</button>
            <button onClick={ () => this.props.onDelete(this.props.counter.id)} className= "btn btn-outline-danger btn-sm m-2" > Delete </button>

           
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
       
        return value === 0 ? "ZERO" : value;
    }
}
 
export default Counter;