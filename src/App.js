import Comentario from './components/Comentario';
import Contador from './components/Contador';
import EjemploUno from './components/EjemploUno';
import FormHook from './components/FormHook';
import Formulario from './components/Formulario';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Saludo from './components/Saludo';

function App() {
  const sujeto = {
    nombre: 'Juanito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  };

  return (
    <div className="container mt-5">
      <h1>Hola Mundo React</h1>
      <hr />
      <Comentario sujeto={sujeto} />
      <Comentario sujeto={sujeto} />
      <hr />
      <Saludo persona="Juanito" edad={25} />
      <Saludo persona="Ignacio" />
      <Saludo persona="Catalina" />
      <hr />
      <EjemploUno />
      <hr />
      <FormHook />
      <hr />
      <Formulario />
      <hr />
      <Lista />
      <hr />
      <Jsx />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
