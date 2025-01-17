import React from "react";
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => ( // solo el parentesis el solo el contenido del return
    <div className="cita">
        <p>Mascota : <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <button
        className="button eliminar u-full-width"
        // el () => esto espera a que se de clic  para ejecutar la funcion
        onClick= {() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>

)

Cita.propType = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
export default Cita;

