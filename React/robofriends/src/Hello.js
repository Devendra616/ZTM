import React, { Component } from 'react';
import './Hello.css'

/* class Hello extends Component {
    render(){
        return ( <div className='tc f1'>
                    <h1>Hello World!</h1>
                    <p>welcome to React</p>
                    <p>{this.props.greeting}</p>
                </div>

        );
    }
} */

const Hello = (props) =>{
    return ( <div className='tc f1'>
                    <h1>Hello World!</h1>
                    <p>welcome to React</p>
                    <p>{props.greeting}</p>
                </div>

    );
}



export default Hello;