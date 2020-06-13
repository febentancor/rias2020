import React, { Component } from 'react';
import DetalleJugador from './DetallesJugador';

class Jugador extends Component {
    mostrarDetalle = (props) => {
        console.log(props.id);
       
            return (
               <React.Fragment>
                  DetalleJugador={props.id}
               </React.Fragment>  
                
            );
        
    }
    crearFila= () => {
        
        const {first_name, last_name, position, id} = this.props.jugador;
        const {abbreviation} = this.props.jugador.team;
        return (
            <React.Fragment>
            <tr>
                <td>{id}</td>
                <td><a href="#" onClick={() => {
                    this.mostrarDetalle({id})
                    }}>
                    {first_name} </a></td>
                <td>{last_name}</td>
                <td>{abbreviation}</td>
                <td>{position}</td>                        
                
            </tr>
            </React.Fragment>
    )
    }
    render() {
        return (
           <React.Fragment>
               {this.crearFila()}
           </React.Fragment>  
            
        );
    }

}
export default Jugador;
