import React, { Component, useState }  from 'react';
import ReactDOM from 'react-dom';
import Jugador from './Jugador';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {render} from 'react-dom';


class DetalleJugador extends Component {
    detalleJugador= () => {
    return(
<table class="table table-striped table-hover">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Nombre</th>
                              <th>Apellido</th>
                              <th>Posicion</th>						
                              <th>Equipo</th>
                              <th>Peso (libras)</th>
                              <th>Altura (pies)</th>
                          </tr>
                      </thead>
                    <tbody>
                    </tbody>
                    </table>
    )}
                
    
render() {
    return (
       <React.Fragment>
           {this.detalleJugador()}
       </React.Fragment>  
        
    );
}
}

export default DetalleJugador;
