import React from 'react';
import './Contenedor_infocurso.css'; 
import imgQueaprendere from '../../assets/aprende_ritmo.png'

function SobreNosotros() {
  return (
    <section className="contenedor row mb-5">
     
      <div className="contenedor-sobre-nosotros col-6">
        <img src={imgQueaprendere} alt="" className="imagen-about-us" />
        </div>
        <div className="contenido-textos col-6" >
         <h2 className="titulo text-center">¿QUÉ APRENDERÉ?</h2>
          <h3>Componentes básicos de formatos, organización y cálculos simples.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde cum porro excepturi, eaque quam ex esse obcaecati accusantium sapiente nam iure cupiditate veritatis voluptatem facilis. Excepturi placeat sequi sapiente numquam.</p>
          <h3>Organización, fórmulas y funciones básicas de manejo de datos</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde cum porro excepturi, eaque quam ex esse obcaecati accusantium sapiente nam iure cupiditate veritatis voluptatem facilis. Excepturi placeat sequi sapiente numquam.</p>
        </div>
      
    </section>
  );
}

export default SobreNosotros;