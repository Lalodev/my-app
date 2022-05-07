import { useState } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {
  const [entradas, setEntradas] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...entradas, data]);
    e.target.reset();
  };

  return (
    <div>
      <h1>Ejemplo #1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="titulo"
          placeholder="Ingrese título"
          className="form-control my-2"
          {...register('titulo', {
            required: { value: true, message: 'Campo requerido' },
            minLength: { value: 2, message: 'Mínimo 2 letras' },
          })}
        />
        {errors.titulo && (
          <span className="text-danger text-small d-block mb-2">
            {errors.titulo.message}
          </span>
        )}
        <input
          name="descripcion"
          placeholder="Ingrese descripción"
          className="form-control my-2"
          {...register('descripcion', {
            required: { value: true, message: 'Campo requerido' },
          })}
        />
        {errors.descripcion && (
          <span className="text-danger text-small d-block mb-2">
            {errors.descripcion.message}
          </span>
        )}
        <button className="btn btn-primary">Agregar</button>
      </form>
      <ul>
        {entradas.map((item, index) => (
          <li key={index} className="mt-2">
            {item.titulo} - {item.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EjemploUno;
