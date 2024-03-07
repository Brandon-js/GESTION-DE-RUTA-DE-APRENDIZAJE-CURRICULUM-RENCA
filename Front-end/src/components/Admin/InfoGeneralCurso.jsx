const InfoGeneralCurso = () => {
  return (
    <div className="form-column">
      <form action="/subir-curso" method="post" encType="multipart/form-data">
        <h2 className="form-tittle">Información curso</h2>
        <label htmlFor="titulo">Título del curso*:</label>
        <br></br>
        <input type="text" id="titulo" name="titulo" required></input>
        <br></br>
        <br></br>
        <label htmlFor="categorias">Categorías*:</label>
        <br></br>
        <input type="text" id="categorias" name="categorias" required></input>
        <br></br>
        <br></br>
        <label htmlFor="que_aprendere">¿Qué aprenderé?:</label>
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

export default InfoGeneralCurso;
