import React, { Component }  from 'react';
class Jugador extends Component {
    
    mostrarDetalleJ = (props) => {
        this.props.mostrarModal(this.props.jugador);
    }

    mostrarDetalleE = (props) => {
        this.props.mostrarEquipo(this.props.jugador.team);
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
                <td><a href="#" onClick={this.mostrarDetalleJ}>
                    {first_name} </a></td>
                <td>{last_name}</td>
                <td><a href="#" onClick={this.mostrarDetalleE}>{abbreviation}</a></td>
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
