const Modulos = () => {
  return (
    <div className="form-column">
      <form action="/subir-curso" method="post" encType="multipart/form-data">
        <h2 className="form-tittle">Módulos</h2>

        <label htmlFor="titulo">Titulo módulo*:</label>
        <br></br>
        <input type="text" id="titulo" name="titulo" required></input>
        <br></br>
        <br></br>

        <label htmlFor="titulo">Nombre lección*:</label>
        <br></br>
        <input type="text" id="titulo" name="titulo" required></input>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};
export default Modulos;
