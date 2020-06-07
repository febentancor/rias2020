import React, { Component } from 'react';
import Jugador from './Jugador';

class DetalleJugador extends Component {
detalleJugador= () => {
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

                        {jugadores.map(jugador =>(
                            <Jugador 
                                key={jugador.personId}
                                jugador={jugador}
                            />
                        ))}
                    </tbody>
                    </table>
}                
    
render() {
    return (
       <React.Fragment>
           {this.detalleJugador()}
       </React.Fragment>  
        
    );
}
}

export default DetalleJugador;