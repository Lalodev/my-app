const Saludo = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Hola! {props.persona}</h2>
    </div>
  );
};

export default Saludo;
