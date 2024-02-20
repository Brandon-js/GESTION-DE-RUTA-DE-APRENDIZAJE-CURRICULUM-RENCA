import React from 'react'
import "./Data_home.css"

const Data_home = () => {
  return (
    <div id="cont-datos" className="container-fluid justify-content-center">

      <div className='row'>
        <div className="col-4 order">
          <div className="text-end col-6"> <h4 className='num-data' style={{color:'#fd571e'}}>50</h4></div> <div className="text-center col-6"><h5 className="text-data">CURSOS DISPONIBLES</h5> </div>
        </div>

        <div className="col-4 order">
          <div className="text-end col-6"> <h4 className='num-data' style={{color:'#ceff26'}}>50</h4></div> <div className="text-start col-6"><h5 className="text-data">USUARIOS REGISTRADOS</h5> </div>
        </div>

        <div className="col-4 order">
          <div className="text-end col-6"> <h4 className='num-data' style={{color:'#fda22d'}}>50</h4></div> <div className="text-start col-6"><h5 className="text-data">CURSOS TERMINADOS</h5> </div>
        </div>
      </div>
    </div>
  )
}

export default Data_home