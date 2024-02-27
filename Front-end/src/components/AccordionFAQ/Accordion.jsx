import { useState } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

function Accordion() {
    const [activeId, setActiveId] = useState(null);

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="accordion" id="accordionExample">
            <AccordionItem
                title="¿Qué tipo de cursos puedo encontrar aquí?"
                content={
                    <div>
                        <p>En este sitio web puedes encontrar una amplia variedad de cursos en diferentes áreas, como:</p>
                        <ul>
                            <li>Competencias digitales: Aprende a usar el computador, internet y las redes sociales de forma segura y eficiente.</li>
                            <li>Desarrollo personal: Mejora tus habilidades blandas como comunicación efectiva, liderazgo y trabajo en equipo.</li>
                            <li>Emprendimiento: Desarrolla las habilidades necesarias para iniciar tu propio negocio.</li>
                            <li>Capacitación laboral: Fortalece tus conocimientos y competencias para el trabajo.</li>
                            <li>Cultura y patrimonio: Conoce la historia y tradiciones de tu región.</li>
                        </ul>
                    </div>
                }
                id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"
                isActive={activeId === 'collapseOne'}
                toggleAccordion={toggleAccordion}
            />
            <AccordionItem
                title="¿Cómo puedo acceder a los cursos?"
                content="Para acceder a los cursos, debes crear una cuenta de usuario en el sitio web. Una vez que tengas una cuenta, podrás navegar por el catálogo de cursos y seleccionar los que te interesen."
                id="collapseTwo"
                isActive={activeId === 'collapseTwo'}
                toggleAccordion={toggleAccordion}
            />
            <AccordionItem
                title="¿Qué puedo hacer si tengo problemas con un curso?"
                content="Si tienes problemas con un curso, puedes contactar al soporte técnico del sitio web."
                id="collapseThree"
                isActive={activeId === 'collapseThree'}
                toggleAccordion={toggleAccordion}
            />
        </div>
    );
}

export default Accordion;

