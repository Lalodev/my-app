import React, { Fragment, useState } from 'react';

const initialState = 0;

const Contador = () => {
  const [numero, setNumero] = useState(initialState);

  const aumentar = () => {
    setNumero(numero + 1);
  };

  return (
    <Fragment>
      <h3>Contador: {numero}</h3>
      <button onClick={aumentar}>Aumentar</button>
    </Fragment>
  );
};

export default Contador;
