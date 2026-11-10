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
   const [error, setError] = useState(null);

    async function cargarGatos() {
      try {
    const respuesta = await fetch("https://api.thecatapi.com/v1/images/search?limit=6");
    if (!respuesta.ok) {
      throw new Error("Error " + respuesta.status);
    }
    const datos = await respuesta.json();
    setGatos([...gatos, ...datos]);} 
    catch (e) {
    setError("No se pudieron cargar los gatos");} 
    finally {
    setCargando(false);
  }}

  useEffect(() => {
    cargarGatos();
    }, []);

  if (cargando) {
  return <p>Cargando...</p>;
  }
  if (error) {
  return <p>{error}</p>;
  }
  return (

    <div className="container">
      {gatos.map(gato => (
        <Tarjeta key={gato.id} imagen={gato.url} />))}
        <div><button onClick={cargarGatos}>Cargar más gatos</button></div>
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