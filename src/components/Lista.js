import React, { Fragment, useState } from 'react';

const Lista = () => {
  const [arrayNumero, setArrayNumero] = useState([1, 2, 3, 4, 5]);
  const [numero, setNumero] = useState(5);

  const agregarElemento = () => {
    setNumero(numero + 1);
    setArrayNumero([...arrayNumero, numero]);
  };

  return (
    <Fragment>
      <h2>Lista</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {arrayNumero.map((item, index) => (
        <p key={index}>
          index {index} - item {item}
        </p>
      ))}
    </Fragment>
  );
};

export default Lista;
