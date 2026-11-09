import './App.css'
import { useState, useEffect } from 'react'



function Tarjeta({ imagen }) {
  return (
    <div className="item">
      <div className="tarjeta">
        <img src={imagen} alt="gato" />
      </div>
      <div className="boton-like">
        <Contador />
      </div>
    </div>
  );
}

function App() {

   const [gatos, setGatos] = useState([]);
   const [cargando, setCargando] = useState(true);
  
    async function cargarGatos() {
      const respuesta = await fetch("https://api.thecatapi.com/v1/images/search?limit=6");
      const datos = await respuesta.json();
      console.log(datos);
      setGatos(datos);
      setCargando(false);
    }

     useEffect(() => {
    cargarGatos();
  }, []);

  if (cargando) {
  return <p>Cargando...</p>;
  }

  return (

    <div className="container">

      {gatos.map(gato => (
        <Tarjeta key={gato.id} imagen={gato.url} />))}
    </div>
);
  
}

function Contador() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Like: {count}
    </button>

  );
}





export default App