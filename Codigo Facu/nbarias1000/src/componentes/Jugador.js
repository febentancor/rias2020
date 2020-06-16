import DetalleJugador from './DetallesJugador';
import ReactDOM from 'react-dom'
import React, { Component, useState }  from 'react';




class Jugador extends Component {
    
    mostrarDetalle = (props) => {
        this.props.mostrarModal(this.props.jugador);
    }

   
    crearFila= () => {
        //const {handleShow} = DetalleJugador();
        const {first_name, last_name, position, id} = this.props.jugador;
        const {abbreviation} = this.props.jugador.team;
        //const var1 = this.props.jugador;

        return (
            <React.Fragment>
            <tr>
                <td>{id}</td>
                <td><a href="#" onClick={this.mostrarDetalle}>
                    {first_name} </a></td>
                <td>{last_name}</td>
                <td>{abbreviation}</td>
                <td>{position}</td>           
            </tr>
            <tr id={id}></tr>
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
