import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  //el orden en el que pongas los useEffect es el orden en el cual se ejecutan
  useEffect(() => {
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      // json.parse es para convertir de string a un arreglo

      //lo pongo en el state
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [/*cuando esto (dependencia) esta vacia quiere decir que se va a ejecutar una sola vez*/])


  //aparece cuando crea, edita o elimina
  useEffect(()=>{ 
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    //trae todos los diferentes al id que tengo que eliminar
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-14 md:flex">
        <Formulario
          //variable con todos los pacientes cargados
          pacientes={pacientes}

          //set para agregar
          setPacientes={setPacientes}

          // paciente es el objeto para editar los campos del formulario
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}

          // set para editar - carga en los campos del formulario
          setPaciente={setPaciente}

          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
