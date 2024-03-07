import React, { useState, useEffect } from 'react'
import ProgresDash from '../components/curso-progreso/ProgresDash'
import '../components/curso-progreso/DashBoard.css'
import BotonCursos from '../components/curso-progreso/BotonCursos'
import '../components/curso-progreso/BotonCursos.css'
import SideBar from '../components/side-bar/SideBar'
import SidenavUser from '../components/SidenavUser/SidenavUser'

function DashBoard() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const fetchCursos = async () => {
            const cursosLocalStorage = localStorage.getItem('cursos');
            let ids = [];
            if (cursosLocalStorage) {
                ids = JSON.parse(cursosLocalStorage);
            }

            const requestBody = {
                ids: ids
            };

            try {
                const response = await fetch('http://localhost:8000/api/cursos-ids', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });
                if (response.ok) {
                    const data = await response.json();
                    setCursos(data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchCursos();
    }, [])
    return (
        <>

            <div className='row'>
                <div className='col-3'>
                    <SidenavUser />
                </div>


                <div id='dentro' className='col-9'>
                    <div id='bienvenida' className='row'>
                        <h3>Bienvenido!!</h3>
                        <p>Recuerda que siempre puedes aprender algo nuevo cada dia!</p>
                    </div>
                    <div id='estado-curso' className='row'>
                        <div id='verde' className='col'>
                            <BotonCursos colorfondo="rgb(146, 212, 52)" cantidad="7" estadoCurso="Cursos completos" />
                        </div>
                        <div id='naranja' className='col'>
                            <BotonCursos colorfondo="orange" cantidad="3" estadoCurso="Cursos en progreso" />
                        </div>
                        <div id='azul' className='col'>
                            <BotonCursos colorfondo="#0290cd" cantidad="10" estadoCurso="Cursos inscritos" />
                        </div>
                    </div>
                    <div>
                        {cursos.map((curso) => (
                            <ProgresDash key={curso._id} infoCurso={curso} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashBoard