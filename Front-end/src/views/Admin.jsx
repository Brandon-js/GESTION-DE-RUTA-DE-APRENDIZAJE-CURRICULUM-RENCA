import React from 'react';
import Sidenav from '../components/Sidenav/Sidenav';
import './Admin.css'; // Asegúrate de importar tu archivo CSS aquí

const Admin = () => {
  // Simula la función de "Seguir editando"
  const handleEdit = () => {
    console.log('Editando...');
    // Aquí puedes agregar la lógica para manejar la acción de editar
  };

  return (
    <>
<<<<<<< Updated upstream
    <Sidenav />
    <h1>Admin Panel</h1>
    <p>maldito lucianohot</p>
  
    </>
  ) 
}
=======
      <Sidenav />
      <div className="container">
        <h1>Admin Panel</h1>
        <div className="dataContainer">
          <div className="dataBox green"></div>
          <div className="dataBox green"></div>
          <div className="dataBox orange"></div>
          <div className="dataBox orange"></div>
          <div className="dataBox blue"></div>
          <div className="dataBox blue"></div>
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
            <div className="userContainer" onClick={handleEdit}>
              Usuario 3
              <button className="editButton">Seguir editando</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
>>>>>>> Stashed changes

export default Admin;
