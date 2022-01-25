import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    // tiene que ir siempre dentro del componente, arriba de funciones y returns, fuera de ifs y fors
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    /*useEffect(()=>{
        console.log(paciente)
    }, [paciente])
    */

    
    useEffect(()=>{
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);

        return random + date;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if([ nombre, propietario, email, fecha, sintomas ].includes('')){
            setError(true)
            //console.log(error)
             return;
        }
        setError(false)

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id){
            //editando el registro
            objetoPaciente.id = paciente.id
            //console.log(objetoPaciente)
            //console.log(paciente)

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            //nuevo registro
            objetoPaciente.id = generarId();
            //console.log(objetoPaciente)
            // para no sobreescrbir hay que tomar una copia de lo que ya hay en el arreglo, hay que editar a traves del set
            setPacientes([...pacientes, objetoPaciente]);
             //setPacientes(objetoPaciente)
        }





        //ahora limpiamos el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-center text-3xl">
                Seguimiento de Pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {/* dos formas de enviar un mensaje - children */}
                { error && <Error><p>Completar el formulario para guardar</p></Error> }
                {/* { error && <Error mensaje="Completar el formulario para guardar" /> } */}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input id="mascota" value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" placeholder="Nombre de la Mascota" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input id="propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value) } type="text" placeholder="Nombre del Propietario" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input id="email" value={email} onChange={ (e) => setEmail(e.target.value) } type="email" placeholder="Email" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="fechaalta" className="block text-gray-700 uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input id="fechaalta" value={fecha} onChange={ (e) => setFecha(e.target.value) } type="date" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea value={sintomas} onChange={ (e) => setSintomas(e.target.value) } placeholder="Describe los síntomas" id="sintomas" type="text" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <input type="submit" className="hover:bg-indigo-700 cursor-pointer transition-all bg-indigo-600 w-full p-3 text-white uppercase font-bold" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }>
                </input>
            </form>
        </div>
    )
}

export default Formulario;
