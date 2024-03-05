import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
function App () {
  const [fact, setfact] = useState('gatos')

  useEffect(() => {
    // inicia una solicitud de red y devuelve un objeto Promise
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      // Toma una función de devolución de llamada como argumento.
      .then(res => res.json())
      // Recibe los datos JSON analizados, para actualizar la variable de estado
      // del json tomamos  el valor de la propiedad "fact"
      .then((data) => setfact(data.fact))
  }, [])

  // Identica solucion pero distinto codigo
  // useEffect(() => {
  //   async function getRandomFact () {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const json = await res.json()
  //     setfact(json.fact)
  //   }
  //   getRandomFact()
  // }, [])

  return (
    <>
      <div className="App">Aplicacion de gatitos</div>
      <section><img src="" alt="Gatito" /></section>
      {fact && <p>{fact}</p>}
    </>
  )
}

export default App
