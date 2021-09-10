import React, {Component} from "react";

export default class Historial extends Component{
    render () {
        return (
            <div className='recordatorio'>
                <h3 >Selección anterior: {this.props.ultimaEleccion}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {this.props.elecciones.map((eleccion,i) => <li key = {i}>{eleccion}</li>)}
                </ul>
            </div>
        )
    }
}