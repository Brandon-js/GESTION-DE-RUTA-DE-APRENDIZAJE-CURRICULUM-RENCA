const DetalleInstructor = () => {
  return (
    <div className="form-column">
      <form action="/subir-curso" method="post" encType="multipart/form-data">
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>

        <label htmlFor="imagen_curso" className="form-label">
          Imagen instructor*:
        </label>
        <br></br>
        <input
          className="form-control"
          type="file"
          id="formFile"
          name="imagen_curso"
          accept="image/*"
          required
        ></input>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};
export default DetalleInstructor;
