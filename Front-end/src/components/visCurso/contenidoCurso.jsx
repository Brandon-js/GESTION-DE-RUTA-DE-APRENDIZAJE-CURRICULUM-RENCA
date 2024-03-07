import Boton_2 from "../botones/boton_2.jsx";   

const ContenidoCurso = (leccion) => {
    console.log(leccion);
    return (
        <div className="content-curso">
            <div className="section-title">
                <h1>Titulo lección</h1>
            </div>
            <div className="section-content">
                <iframe
                    src="https://www.slideshare.net/slideshow/embed_code/key/tc9pVi4Rpue9E5?startSlide=1"
                    // eslint-disable-next-line react/no-unknown-property
                    toolbar="0" frameborder="0" allowfullscreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>
            </div>
            <div className="section-tip">
                <p>Python es conocido por su legibilidad y simplicidad. Aprovecha esto aprendiendo a escribir código limpio y
                    legible desde el principio. Utiliza nombres de variables descriptivos, comentarios claros y sigue las
                    convenciones de estilo de Python (PEP 8). Esto no solo facilitará la lectura y comprensión de tu código, sino
                    que también te ayudará a desarrollar buenos hábitos de programación desde el principio.</p>
            </div>
            <div className="section-footer">
            <Boton_2 text='Continuar'/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                    crossOrigin="anonymous"></script>
            </div>
        </div>
    );
}

export default ContenidoCurso;