const Lecciones = () => {
  return (
    <div className="form-column">
      <form action="/subir-curso" method="post" encType="multipart/form-data">
        <br></br>
        <br></br>

        <br></br>
        <br></br>

        <label htmlFor="archivo" className="form-label">
          Recurso lección*:
        </label>
        <br></br>
        <input
          className="form-control"
          type="file"
          id="archivo"
          name="imagen_curso"
          accept=".pdf, .doc, .docx*"
          required
        ></input>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};
export default Lecciones;
