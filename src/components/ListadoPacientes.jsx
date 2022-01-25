import Paciente from "./Paciente"

function ListadoPacientes({pacientes}) {
    return (
        <div className="md:w-1/2 lg:w-3/5">

            {pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-black text-center text-3xl">
                            Listado Pacientes
                        </h2>

                        <p className="text-lg mt-5 text-center mb-10">
                            Administra tus {' '}
                            <span className="text-indigo-600 font-bold">
                                Pacientes y Citas
                            </span>
                        </p>
                        <div className=" md:h-screen overflow-y-scroll">
                            {
                                pacientes.map( paciente => ( 
                                        <Paciente key={paciente.id} paciente={paciente} />
                                    )
                                )
                            } 
                            
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-center text-3xl">
                            No hay pacientes
                        </h2>

                        <p className="text-lg mt-5 text-center mb-10">
                            Carga los datos y aparecerán {' '}
                            <span className="text-indigo-600 font-bold">
                              aquí
                            </span>
                        </p>
                    </>
                )
            }

        </div>
    )
}

export default ListadoPacientes
