import React, { Component } from 'react';
import Jugador from './Jugador';

class Resultado extends Component {


    mostrarJugadores= () => {
        const jugadores = this.props.jugadores;
        if(jugadores.leght === 0) return null;
        console.log(jugadores);
        return (
            <React.Fragment>
                    <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th >#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Equipo</th>	
                            <th>Posicion</th>		
                        </tr>
                    </thead>
                    <tbody>

                        {jugadores.map(jugador =>(
                            <Jugador 
                                key={jugador.id}
                                jugador={jugador}

                            />
                        ))}
                    </tbody>
                    </table>
            </React.Fragment>
        )
    }

    render() {
        return (
           <React.Fragment>
               {this.mostrarJugadores()}
           </React.Fragment>  
            
        );
    }
}

export default Resultado;