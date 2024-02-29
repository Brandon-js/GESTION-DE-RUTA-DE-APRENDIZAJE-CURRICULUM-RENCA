import React from 'react'
import YoutubePlayer from 'react-player/youtube'
import './CursoAbierto.css'

function CursoAbierto() {
  return (
    <center>

    <div className='conteiner-curso-abierto'>
        
            <YoutubePlayer className='react-player'
            url = "https://youtu.be/PFQEC8YQtHY?si=vi-EWaDFa-gmBNPL" 
            controls
            
            />
    </div>
    <div className='conteiner-curso-abierto'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus vero molestias excepturi at minus temporibus eveniet, possimus quasi cumque laborum a earum illo fugit nisi officiis aliquid eius recusandae!</p>


            </div>
    </center>
  )
}

export default CursoAbierto