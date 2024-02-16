import React from 'react'
import './Card_1.css'
import Boton_2 from '../botones/Boton_2'
import Boton_3 from '../botones/Boton_3'
import {Link} from 'react-router-dom'

// Esta card recibe parametros mediante props, es importante agregarlos si se va a reutilizar !
const Card_1 = (props) => {
  return (
        <div className="card1 card col-auto m-3">
            <img src={props.imagen} className="img-fluid card-img-top" alt={props.alt}/>
            <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <Link to="/registro" id="btn1">
              <Boton_3 text={'Inscribirme'} />
            </Link>
            <Link to="/cursos" id="btn2">
              <Boton_2 text={'Ver más'}/>
            </Link>
            </div>
        </div> 
        
  )
}

export default Card_1