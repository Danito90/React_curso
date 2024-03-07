import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact2 } from './services/facts.js'

// Hay un problema con la Api, no esta activa y no devuelve la url, pero el codigo es correcto y funciona
function AppService () {
  const [fact, setFact] = useState('')
  const [ImageUrl, setImageUrl] = useState('')

  useEffect(() => {
    // Obtiene una frase random y lo manda a setFact
    getRandomFact2().then(setFact)
  }, [])

  useEffect(() => {
    if (fact) {
    // use otra api que la que decia el proyecto, porque ya no tiene la prop url
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then((imageData) => {
          const { url } = imageData[0]
          setImageUrl(url)
        })
    }
  }, [fact])

  async function handleClick () {
    const newFact = await getRandomFact2()
    setFact(newFact)
  }

  //   useEffect(() => {
  //     async function fecthData () {
  //       try {
  //         const res = await fetch('https://cat-fact.herokuapp.com/fact')
  //         if (!res.ok) {
  //           throw new Error('Nope')
  //         }
  //         const data = await res.json()
  //         setFact(data)
  //         console.log(data)
  //       } catch (error) {
  //         console.error(error)
  //       }
  //     }
  //   }, [])

  return (
    <main>
      <h1 className="App">Aplicacion de gatitos</h1><br />
      <section>
        {ImageUrl && <img src = {`${ImageUrl}`} alt={`Imagen conseguida a partir de las primeras 3 palabras: ${fact}`} id='imgFact' style = {{ width: '300px', height: '300px' }}/>}
        {fact && <h5>{fact}</h5>}
      </section>
      <br />
      <button onClick = {handleClick}>Cargar un nuevo fact</button>
    </main>
  )
}

export default AppService
