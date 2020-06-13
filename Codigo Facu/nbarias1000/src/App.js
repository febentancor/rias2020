import React, { Component } from 'react';
import Buscador from './componentes/Buscador'
import Resultado from './componentes/Resultado';
import DetalleJugador from './componentes/DetallesJugador';

class App extends Component {
  state = {
    termino : '',
    jugadores : []
  }

  consultarApi = () => {
    //const url = 'http://data.nba.net/10s/prod/v1/2019/players.json';
    const termino = this.state.termino;
    fetch(`https://free-nba.p.rapidapi.com/players?page=0&per_page=700&search=${termino}`, {
      "method": "GET","headers": {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "3481fc804fmshe3d9ee789fcb8dbp1a0a0bjsndf7080bc7c78"
	}
})
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ jugadores : resultado.data }))
  }

datosBusqueda = (termino)=> {
  this.setState({
    termino
  },()=>{
    this.consultarApi();
  })
  console.log(termino);
}
render(){
  return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de jugadores</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <Resultado 
        jugadores={this.state.jugadores}
        /> 
        <DetalleJugador 
        jugadores={this.state.jugadores}
        />
      </div>
  );
}
}

export default App;
