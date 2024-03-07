import './Sobre-el-instructor.css'
import imgInstructor from '../../assets/icon-user.png'

function sobreElInstructor() {
    return(
        <section id="contenedor-azulito" className="container-fluid d-flex justify-content-center " >
            <div className="contenedor-azul row" >
                <div className="contenedor-imagen col-6">
                 <img src={imgInstructor} className='imgInstructor text-center'></img>
                </div>
                <div className="contenedor-textos col-6">
                <h3 className='titulo-instructor'>Sobre el instructor</h3>
                <p id='texto-instructor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere similique qui vero quos quasi? Optio aperiam blanditiis itaque voluptatum, minus placeat, nostrum architecto id reiciendis voluptatibus, assumenda corrupti ex consequuntur?</p>
                </div>

            </div>
        </section>
    )
}

export default sobreElInstructor