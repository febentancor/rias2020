import React from 'react';
const Jugador = (props) => {
    const {first_name, last_name, position, id} = props.jugador;
    const {abbreviation} = props.jugador.team;
    return (
     /*  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
           <div className="card-body">
                <p className="card-text">Nombre {first_name}</p>
                <p className="card-text">Apellido {last_name}</p>
                <p className="card-text">Posición {position}</p>
           </div>
       </div>*/
        <tr>
            <td>{id}</td>
            <td><a href="#">{first_name}</a></td>
            <td>{last_name}</td>
            <td>{position}</td>                        
            <td>{abbreviation}</td>
        </tr>
)

}
export default Jugador;
