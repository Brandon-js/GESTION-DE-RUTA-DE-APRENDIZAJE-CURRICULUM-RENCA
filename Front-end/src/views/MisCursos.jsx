import React from 'react'
import SideBar from '../components/side-bar/SideBar'
import ProgresDash from '../components/curso-progreso/ProgresDash'
import '../components/curso-progreso/ProgresDash.css'
import CursoAbierto from '../components/CursoAbierto/CursoAbierto'
import SidenavUser from '../components/SidenavUser/SidenavUser'
import { useEffect,useState } from 'react'


function MisCursos() {

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

                            <div className="busqueda">
                              <div className='col' id='barra-busqueda'>
                                <label className="font-weight-bold">Buscar curso: </label>
                                <input type="search" className="form-control" placeholder="ingrese nombre del curso" />
                              </div>
                              <div className='col-1'>
                                
                              <input type="submit" value="Buscar"></input>

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

export default MisCursos