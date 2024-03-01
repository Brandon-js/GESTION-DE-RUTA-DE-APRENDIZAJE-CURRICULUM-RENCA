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
        
        <div className='row'>

        </div>

    </div>
    </center>
  )
}

export default CursoAbierto