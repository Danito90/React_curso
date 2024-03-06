import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
// const CAT_ENDPOINT_URL = 'https://cataas.com'

// Hay un problema con la Api, no esta activa y no devuelve la url, pero el codigo es correcto y funciona
function App () {
  const [fact, setfact] = useState('')
  const [ImageUrl, setImageUrl] = useState('')

  useEffect(() => {
    // inicia una solicitud de red y devuelve un objeto Promise
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      // Toma una función de devolución de llamada como argumento.
      .then(res => res.json())
      // Recibe los datos JSON analizados, para actualizar la variable de estado
      // del json tomamos  el valor de la propiedad "fact"
      .then((data) => {
        // Desestructuración para extraer la fact propiedad
        const { fact } = data
        // pasamos la propiedad fact
        setfact(fact)
        const firstWord = fact.split(' ', 3).join(' ')
        console.log(`First word: ${firstWord}`)

        fetch('https://api.thecatapi.com/v1/images/search')
          .then(response => response.json())
          .then((imageData) => {
            console.log(imageData)
            const { url } = imageData[0]
            setImageUrl(url)
          })
      }
      )
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
    <main>
      <h1 className="App">Aplicacion de gatitos</h1><br />
      <section>
        {ImageUrl && <img src={`${ImageUrl}`} alt={`Imagen conseguida a partir de las primeras 3 palabras: ${fact}`} id='imgFact' style = {{ width: '300px', height: '300px' }}/>}

        {fact && <h5>{fact}</h5>}
      </section>
    </main>
  )
}

export default App
