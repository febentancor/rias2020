import React, { Component } from 'react';
import Jugador from './Jugador';

class Resultado extends Component {
    mostrarJugadores= () => {
        const jugadores = this.props.jugadores;
        if(jugadores.leght === 0) return null;
        console.log(jugadores);
        return (
            <React.Fragment>
                    <div className="table-filter">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="show-entries">
                                    <span>Show</span>
                                    <select className="form-control">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>15</option>
                                        <option>20</option>
                                    </select>
                                    <span>entries</span>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                <div className="filter-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="filter-group">
                                    <label>Location</label>
                                    <select className="form-control">
                                        <option>All</option>
                                        <option>Berlin</option>
                                        <option>London</option>
                                        <option>Madrid</option>
                                        <option>New York</option>
                                        <option>Paris</option>								
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label>Status</label>
                                    <select className="form-control">
                                        <option>Any</option>
                                        <option>Delivered</option>
                                        <option>Shipped</option>
                                        <option>Pending</option>
                                        <option>Cancelled</option>
                                    </select>
                                </div>
                                <span className="filter-icon"><i className="fa fa-filter"></i></span>
                            </div>
                        </div>
                    </div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Posicion</th>						
                            <th>Equipo</th>						
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
