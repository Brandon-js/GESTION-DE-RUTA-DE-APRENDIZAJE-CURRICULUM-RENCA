import React from 'react'
import './Breadcrumb.css'

const Breadcrumb = () => {
    const customStyle = {
      '--bs-breadcrumb-divider': '>',
    };
  
    return (
      <nav className='breadc' style={customStyle} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
    );
  }

export default Breadcrumb