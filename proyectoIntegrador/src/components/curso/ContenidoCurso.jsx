import Boton_4 from "../botones/Boton_4";
import ImagenContenidoCurso from "./ImagenContenidoCurso";
import TextoContenidoCurso from "./TextoContenidoCurso";
import TituloContenidoCurso from "./TituloContenidoCurso";

// eslint-disable-next-line react/prop-types
const ContenidoCurso = ({ contenido }) => {
  return (
    <div className="main p-3">
      <div className="container-fluid">
        <TituloContenidoCurso
          // eslint-disable-next-line react/prop-types
          titulo={`${contenido.modulo}: "${contenido.seccion}"`}
        />
        <div className="image-container">
          <ImagenContenidoCurso />
          <TextoContenidoCurso />
          <Boton_4 />
        </div>
      </div>
    </div>
  );
};

export default ContenidoCurso;
