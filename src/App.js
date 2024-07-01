import React, {Fragment, useEffect, useState} from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  //Citas en local storage 
  let  citasIniciales = JSON.parse(localStorage.getItem('citas')); 
  if(!citasIniciales){
    citasIniciales = [];
  }
  // el valor de inicio va a ser lo que esta en el localstorage
  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use Effect para realizar ciertas operaciones cuando el state cambia
  // Es como el DOMContentLoaded
// Se ejecuta cuando el coponente esta listo o cuando hay cambios en el componente
  useEffect(() => {
    if(citasIniciales){
    // let  citasIniciales = JSON.parse(localStorage.getItem('citas')); -> otra opcion de solucion

      // insgresa todo el objeto de citas cada vez que se elimina algo o ingrese algo
      localStorage.setItem('citas', JSON.stringify(citas)) // en caso que si hay citas lo guarda en el localstorage lo que esta en el state "TODO"
    }else{
      localStorage.setItem('citas', JSON.stringify([]))

    }
  }, [citas,citasIniciales])// cada vez que cambie citas se ejecutara en este caso el localstorage
   // --> se le conoce comodependencias , aqui se ejecutara cada vez que exista cambio en componente
  //  el arreglo es para que se ejecute una vez , bueno consultas para apis

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas ( [
      ...citas,
      cita
    ])
    
  }
  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id)
      guardarCitas(nuevasCitas)
  }
  const titulo = citas.length === 0  ?  'No hay citas' : 'Aministrar tus Citas';
  //se ejecutara este map cuando existan elementos en  el array (62)
  //si no se encuentran no se ejecuta (62)
  return (
    <Fragment>
        <h1> Administrador de Pacientes </h1>
        <div className="container">
          <div className="row">
            <div className="one-half column"> 
              <Formulario
              crearCita  = {crearCita}
               /> 
            </div>
            <div className="one-half column"> 
              <h2>{titulo}</h2>
              
              {citas.map(cita => ( 
                  <Cita
                  key={cita.id}// se muestra en el state
                    cita = {cita}//se mostrata en el promp
                    eliminarCita = {eliminarCita}

                  />
              ))}
            </div>
          </div>
        </div>
    </Fragment>
  
  );
}

export default App;
