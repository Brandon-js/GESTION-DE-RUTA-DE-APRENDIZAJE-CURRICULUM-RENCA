import { useState } from 'react';
import './ContactForm.css';
import Boton_2 from '../botones/Boton_2';

const FormularioContacto = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Almacenar los datos en una base de datos o API
        console.log(`Nombre: ${nombre}`);
        console.log(`Apellido: ${apellido}`);
        console.log(`Correo electrónico: ${correoElectronico}`);
        console.log(`Mensaje: ${mensaje}`);

        // Mostrar un mensaje de éxito
        alert('¡Formulario enviado correctamente!');

        // Resetear el formulario
        setNombre('');
        setApellido('');
        setCorreoElectronico('');
        setMensaje('');
    };

    return (
        <div className='container-form'>
            <h1 id='form-tittle'>¿Aún tienes dudas?</h1>
            <h2 id='form-subtittle'>Contáctanos</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre*</label>
                <input className="input-form" type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

                <label htmlFor="apellido">Apellido*</label>
                <input className="input-form" type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />

                <label htmlFor="correo_electronico">Correo electrónico*</label>
                <input className="input-form" type="email" id="correo_electronico" name="correo_electronico" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} required />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="input-mensaje" id="mensaje" name="mensaje" rows="5" cols="30" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                <div className='text-center'>
                    <Boton_2 type='submit' text='Enviar' />
                </div>
            </form>
        </div>
    );
};

export default FormularioContacto;
