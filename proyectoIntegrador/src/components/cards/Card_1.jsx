import React from 'react'

const Card_1 = (props) => {
  return (
        <div class="card col-auto m-3" style="width: 18rem;">
            <img src={props.image} className="card-img-top" alt={props.alt}/>
            <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <a href="#" class="btn btn-ren">{props.button}</a>
            </div>
        </div>
  )
}

export default Card_1