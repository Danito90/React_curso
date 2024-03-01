import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // como minimo se ejecutara una vez el codigo aqui colocado, siempre porque cuando se monta el componente, se ejecuta una vez
    // si el segundo parametro no se pasa, se ejecuta cada vez que se renderice el componente
    console.log('codigoAEjecutar')
  }, 
  // el segundo parametro es opcional, es un arreglo. por lo menos se ejecuta una vez(cuando se monta el componente)
  // estas dependencias dicen: cada vez que cambie este valor quiero que se ejecute
  // Si pasamos un [] vacio, lo que hace es ejecutar solo cuando se renderiza por primera vez el componente. Decimos que no se fije en nada
  // Si pasamos dependencias(por ejemplo en el juego tateti cuando cambia board o turn) [board,turn], le estamos diciendo que se renderice cada vez que cambia el valor de estos estados  
  []);

  return (
    <>
      <h1>Probando</h1>
    </>
  );
}

export default App;
