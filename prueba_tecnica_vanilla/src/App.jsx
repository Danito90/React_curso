import { useState, useEffect } from 'react'
import '../src/style.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_ENDPOINT_URL = 'https://cataas.com'

// Hay un problema con la Api, no esta activa y no devuelve la url, pero el codigo es correcto y funciona
export function App () {
  const [fact, setfact] = useState('')
  const [ImageUrl, setImageUrl] = useState('')

  // un efecto para recuperar la cita al cargar la pagina
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
      }
      )
  }, [])

  // efecto para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(()=>{
    if (fact) {
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(`First word: ${firstWord}`)

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then((response) => response.json())
      .then((imageData) => {
        const { url } = imageData
        setImageUrl(url)
        console.log(imageData)
      })}
  },[fact])

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
      <div className="App">Aplicacion de gatitos</div>
      <section>
        {ImageUrl && <img src={`${CAT_ENDPOINT_URL}${ImageUrl}`} alt={`Imagen conseguida a partir de las primeras 3 palabras: ${fact}`} id='imgFact' />}
        {!ImageUrl && <img src={`https://upload.wikimedia.org/wikipedia/commons/c/c1/Sin_fotograf%C3%ADa.jpg`} alt={`Sin imagen`} id='imgFact' style = {{width: '180px'}} />}
        {fact && <p>{fact}</p>}
      </section>
    </main>
  )
}

