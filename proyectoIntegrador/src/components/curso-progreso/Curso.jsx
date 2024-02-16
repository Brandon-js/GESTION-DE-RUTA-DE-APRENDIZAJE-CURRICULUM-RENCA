import React from 'react'
import './Curso.css'
function Curso() {

  return (
    <div class="card" ng-repeat="card in cards">
				<div class="info">
                    <img src="http://via.placeholder.com/640x360" height={130} ></img>
                    <h5>Titulo</h5>
					<p>descripcion</p>
					<div className="progress-wrap progress" data-progress-percent="25">
                <div className="progress-bar progress"><h4>25%</h4></div>
                </div>
				</div>
				<button className="card-button" ng-click="viewMore()">Empezar</button>
										
			</div>
  )
}

export default Curso