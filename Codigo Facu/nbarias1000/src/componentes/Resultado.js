import React, { Component } from 'react';
import Jugador from './Jugador';

class Resultado extends Component {
    mostrarJugadores= () => {
        const jugadores = this.props.jugadores;
        if(jugadores.leght === 0) return null;
        console.log(jugadores);
        return (
            <React.Fragment>
                    <div class="table-filter">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="show-entries">
                                    <span>Show</span>
                                    <select class="form-control">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>15</option>
                                        <option>20</option>
                                    </select>
                                    <span>entries</span>
                                </div>
                            </div>
                            <div class="col-sm-9">
                                <button type="button" class="btn btn-primary"><i class="fa fa-search"></i></button>
                                <div class="filter-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control"></input>
                                </div>
                                <div class="filter-group">
                                    <label>Location</label>
                                    <select class="form-control">
                                        <option>All</option>
                                        <option>Berlin</option>
                                        <option>London</option>
                                        <option>Madrid</option>
                                        <option>New York</option>
                                        <option>Paris</option>								
                                    </select>
                                </div>
                                <div class="filter-group">
                                    <label>Status</label>
                                    <select class="form-control">
                                        <option>Any</option>
                                        <option>Delivered</option>
                                        <option>Shipped</option>
                                        <option>Pending</option>
                                        <option>Cancelled</option>
                                    </select>
                                </div>
                                <span class="filter-icon"><i class="fa fa-filter"></i></span>
                            </div>
                        </div>
                    </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                            <th>Location</th>
                            <th>Order Date</th>						
                            <th>Status</th>						
                            <th>Net Amount</th>
                            <th>Action</th>
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