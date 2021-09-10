import React, {Component} from "react";

export default class Historial extends Component{
    render () {
        return (
            <div className='recordatorio'>
                <h3 >Selección anterior: {this.props.ultimaEleccion}</h3>
                <h3>Historial de opciones elegidas:</h3>
                <ul>
                    {this.props.elecciones.map((eleccion,i) => <li key = {eleccion + i}>{eleccion}</li>)}
                </ul>
            </div>
        )
    }
}