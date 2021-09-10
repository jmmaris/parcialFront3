import React, {Component} from 'react';
import Historial from './Historial';
import Opciones from './Opciones';
import data from './data.json';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      'circunstancia':data[0],
      'etapa': 1,
      'ultimaEleccion':'',
    };
  }
  
  elecciones = [];

  // componentWillMount = () => {
  //   this.setState({
  //     'circunstancia':,
  //     'etapa': 1,
  //     'ultimaEleccion':'',
  //   })
  // }

  componentDidUpdate = () => {
    this.elecciones.push(this.state.ultimaEleccion)
  }
  
  actualizarHistoria = (e) => {
    let opcion = e.target.id;

    if (this.state.etapa === 5){
      alert('FIN')
    } else {
      this.setState ({
        circunstancia : data.filter((e) => {return e.id === (this.state.etapa + 1 )+ opcion})[0],
        etapa: this.state.etapa + 1,
        ultimaEleccion: opcion.toUpperCase(),
      })
    }
  }

  render(){

   return (
      <div className= 'layout'>
        <h1 className= 'historia'>
          {this.state.circunstancia.historia}
        </h1>

        <Opciones opciones = {this.state.circunstancia.opciones} handleClick = {this.actualizarHistoria} />
        <Historial  ultimaEleccion = {this.state.ultimaEleccion} elecciones = {this.elecciones} />
        
      </div>
  );
  }
}

