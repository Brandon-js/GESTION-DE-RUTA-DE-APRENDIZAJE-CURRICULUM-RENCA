import React from "react";
import "./Data_home.css";

const Data_home = () => {
  return (
    <>
      <div className="container-fluid justify-content-center d-md-none data-content">
        <div className="carousel slide ms-3" id="data-content-slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="container text-center row">
                  <div className="col-12">
                    <h4 className="num-data" style={{ color: "#fd571e" }}> 62 </h4>
                  </div>
                  <div className="col-12 ">
                    <h5 className="text-data">CURSOS DISPONIBLES</h5>
                  </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container justify-content-center text-center row">
                  <div className="col-12">
                    <h4 className="num-data" style={{ color: "#ceff26" }}> 1039 </h4>
                  </div>
                  <div className="col-12">
                    <h5 className="text-data">USUARIOS REGISTRADOS</h5>
                  </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container text-center row">
                  <div className="col-12">
                    <h4 className="num-data" style={{ color: "#fda22d" }}> 530 </h4>
                  </div>
                  <div className="col-12">
                    <h5 className="text-data">CURSOS TERMINADOS</h5>
                  </div>                
              </div>
            </div>

          </div>
        

        <button className="carousel-control-prev" type="button" data-bs-target='#carousel' data-bs-slide="prev">
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target='#carousel' data-bs-slide="next">
          <span className="visually-hidden">Siguiente</span>
        </button>

        </div>
      </div>

      {/* Display 768px */}
      <div className="container-fluid justify-content-center d-none d-md-block data-content">
        <div className="row">
          <div className="col-4 row ms-3">
            <div className="text-end col-12">
              {" "}
              <h4 className="num-data" style={{ color: "#fd571e" }}>
                62
              </h4>
            </div>{" "}
            <div className="text-center col-12">
              <h5 className="text-data">CURSOS DISPONIBLES</h5>{" "}
            </div>
          </div>

          <div className="col-4 row">
            <div className="text-end col-12">
              {" "}
              <h4 className="num-data" style={{ color: "#ceff26" }}>
                1039
              </h4>
            </div>{" "}
            <div className="text-start col-12">
              <h5 className="text-data">USUARIOS REGISTRADOS</h5>{" "}
            </div>
          </div>

          <div className="col-4 row">
            <div className="text-end col-12">
              {" "}
              <h4 className="num-data" style={{ color: "#fda22d" }}>
                530
              </h4>
            </div>{" "}
            <div className="text-start col-12">
              <h5 className="text-data">CURSOS TERMINADOS</h5>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Display 768px */}
    </>
  );
};

export default Data_home;
