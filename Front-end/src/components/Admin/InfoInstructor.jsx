const InfoGeneralInstructor = () => {
  return (
    <div className="form-column">
      <form action="/subir-curso" method="post" encType="multipart/form-data">
        <h2 className="form-tittle">Información instructor</h2>

        <label htmlFor="titulo">Nombre instructor*:</label>
        <br></br>
        <input type="text" id="titulo" name="titulo" required></input>
        <br></br>
        <br></br>

        <label htmlFor="que_aprendere">Descripción:</label>
        <br></br>
        <textarea
          id="que_aprendere"
          name="que_aprendere"
          rows="4"
          cols="50"
        ></textarea>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default InfoGeneralInstructor;
