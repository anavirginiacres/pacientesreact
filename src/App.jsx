import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

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
        />
      </div>
    </div>
  )
}

export default App
