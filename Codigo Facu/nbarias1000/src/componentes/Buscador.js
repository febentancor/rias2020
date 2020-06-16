import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();
        //tomamos el input
        const termino = this.busquedaRef.current.value;
        console.log(termino);
        //enviamos al principal
        this.props.datosBusqueda(termino)
    }
    
    render() {
        return (
            
            <form onSubmit={this.obtenerDatos}>
                <div className="row">   
                    <div className="form-grpup col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control 
                        form-control-lg" placeholder="Busca tu jugador"/>
                    </div>
                    <div className="form-grpup col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" placeholder="Busca tu jugador"/>
                    </div>
                </div>
            </form>
        );
    }
}
export default Buscador;