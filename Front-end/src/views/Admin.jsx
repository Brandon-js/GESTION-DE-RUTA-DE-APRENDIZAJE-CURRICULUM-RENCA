import React from 'react';
import Sidenav from '../components/Sidenav/Sidenav';
import './Admin.css'; // Asegúrate de importar tu archivo CSS aquí
import BotonCursos from '../components/curso-progreso/BotonCursos'
import '../components/curso-progreso/BotonCursos.css'

const Admin = () => {
  // Simula la función de "Seguir editando"
  const handleEdit = () => {
    console.log('Editando...');
    // Aquí puedes agregar la lógica para manejar la acción de editar
  };

  return (
    <>



    <div className='row'>
    <div className='col-3'>
        <Sidenav />
    </div>


      <div className='col-9'>
        <h1>Admin Panel</h1>
        <div id='estado-curso' className='row'>
            <div id='verde' className='col'>
            <BotonCursos colorfondo="rgb(146, 212, 52)" cantidad="7" estadoCurso="Cursos completos" />
            </div>
            <div id='naranja' className='col'>
            <BotonCursos colorfondo="orange" cantidad="3" estadoCurso="Cursos en progreso" />
            </div>
            <div id='azul' className='col'>
            <BotonCursos colorfondo="#0290cd" cantidad="10" estadoCurso="Cursos inscritos"/>
            </div>
        </div>
        <div id='estado-curso' className='row'>
            <div  className='col'>
            <BotonCursos colorfondo="rgb(146, 212, 52)" cantidad="7" estadoCurso="Cursos completos" />
            </div>
            <div  className='col'>
            <BotonCursos colorfondo="orange" cantidad="3" estadoCurso="Cursos en progreso" />
            </div>
            <div  className='col'>
            <BotonCursos colorfondo="#0290cd" cantidad="10" estadoCurso="Cursos inscritos"/>
            </div>
        </div>
        </div>


        <div className="reviewSection">
          <h2>Cursos en revisión</h2>
          <div className="container">
            <div className="reviewContainer" onClick={handleEdit}>
              Curso 1
              <button className="editButton">Seguir editando</button>
            </div>
            <div className="reviewContainer" onClick={handleEdit}>
              Curso 2
              <button className="editButton">Seguir editando</button>
            </div>
            <div className="reviewContainer" onClick={handleEdit}>
              Curso 3
              <button className="editButton">Seguir editando</button>
            </div>
          </div>
        </div>
        <div className="pendingUsersSection">
          <h2>Ingresos de usuarios pendientes</h2>
          <div className="container">
            <div className="userContainer" onClick={handleEdit}>
              Usuario 1
              <button className="editButton">Seguir editando</button>
            </div>
            <div className="userContainer" onClick={handleEdit}>
              Usuario 2
              <button className="editButton">Seguir editando</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;