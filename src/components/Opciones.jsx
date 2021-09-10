import React, {Component} from "react";

export default class Opciones extends Component {
    render(){
        return (
            <ul className = 'opciones' >
                <li className='opcion' key='a'><button id='a' className='botones' onClick={this.props.handleClick}>A</button><h3>{this.props.opciones.a}</h3></li>
                <li className='opcion' key='b'><button id='b' className='botones' onClick={this.props.handleClick}>B</button><h3>{this.props.opciones.b}</h3></li>
            </ul>
        );
    }
}
