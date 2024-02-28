import React from 'react'
import './Breadcrumb.css'
import {Link} from 'react-router-dom'

const Breadcrumb = () => {
    const customStyle = {
      '--bs-breadcrumb-divider': '>',
    };
  
    return (
      <nav className='breadc' style={customStyle} aria-label="breadcrumb">
        <ol className="breadcrumb ms-2">
          <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
          <li className="breadcrumb-item"> <Link to='/catalogo'>Catálogo</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Cursos Populares</li>
        </ol>
      </nav>
    );
  }

export default Breadcrumb