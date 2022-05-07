import { useState } from 'react';

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
  });

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enviando:  ${datos.nombre} ${datos.apellido}`);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Apellido"
            className="form-control"
            type="text"
            name="apellido"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
