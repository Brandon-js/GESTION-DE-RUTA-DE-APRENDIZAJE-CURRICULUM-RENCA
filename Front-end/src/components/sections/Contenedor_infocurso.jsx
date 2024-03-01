import React from 'react';
import './Contenedor_infocurso.css'; 

function SobreNosotros() {
  return (
    <section className="contenedor sobre-nosotros">
      <h2 className="titulo">Qué aprenderé?</h2>
      <div className="contenedor-sobre-nosotros">
        <img src="img/80f27ada-9001-4f9c-a2c5-a9ffd715637e_Screen+Shot+2023-02-09+at+1.11.48+PM.avif" alt="" className="imagen-about-us" />
        <div className="contenido-textos">
          <h3><span>1</span>Componentes básicos de formatos, organización y cálculos simples.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde cum porro excepturi, eaque quam ex esse obcaecati accusantium sapiente nam iure cupiditate veritatis voluptatem facilis. Excepturi placeat sequi sapiente numquam.</p>
          <h3><span>2</span>Organización, fórmulas y funciones básicas de manejo de datos</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde cum porro excepturi, eaque quam ex esse obcaecati accusantium sapiente nam iure cupiditate veritatis voluptatem facilis. Excepturi placeat sequi sapiente numquam.</p>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;