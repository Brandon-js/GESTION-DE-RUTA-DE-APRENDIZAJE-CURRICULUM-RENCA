import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import "./Upload_Section.css";
import InfoGeneralCurso from "./InfoGeneralCurso";
import DetalleCurso from "./DetalleCurso";
import InfoGeneralInstructor from "./InfoInstructor";
import DetalleInstructor from "./DetalleInstructor";
import Modulos from "./Modulos";
import Lecciones from "./Lecciones";

const Upload_Section = () => {
  return (
    <div>
      <Sidenav />
      <div className="breadcrumbsc">
        <nav aria-label="breadcrumb">
          <h1 className=".bc-tittle">Subir curso</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Mi panel</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Subir curso
            </li>
          </ol>
        </nav>
      </div>
      <div className="grid-content">
        <InfoGeneralCurso />
        <DetalleCurso />
        <InfoGeneralInstructor />
        <DetalleInstructor />
        <Modulos />
        <Lecciones />
        <div>
          <button type="button" id="btnAgregarModulo">
            Agregar lecciones
          </button>
        </div>
        <div>
          <br></br>
          <button type="button" id="btnAgregarModulo">
            Agregar módulo
          </button>
        </div>
        <div>
          <br></br>
          <br></br>
          <input class="submit-btn" type="submit" value="Guardar curso"></input>
          <input class="submit-btn" type="submit" value="Subir curso"></input>
        </div>
      </div>
    </div>
  );
};

export default Upload_Section;
