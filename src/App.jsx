import './App.css'
import { useState } from 'react'



function Tarjeta({ titulo }) {
  return (
    <div className="item">
      <div className="tarjeta">
        <p>{titulo}</p>
      </div>
      <div className="boton-like">
        <Contador />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Tarjeta titulo="Foto1" />
      <Tarjeta titulo="Foto2" />
      <Tarjeta titulo="Foto3" />
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