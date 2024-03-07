import { useCatImage } from '../services/hooks/useCatImage'
import '../App.css'

export function Otro () {
  // pasamos la propiedad como valor fijo, no aleatorio
  // igual funciona, esto es lo bueno

  const { ImageUrl } = useCatImage({ fact: 'cat' })

  return (
    <>
      <main>
        <br />
        {ImageUrl && <img src = {`${ImageUrl}`} id='imgFact' style = {{ width: '200px', height: '200px' }}/>}
      </main>
    </>
  )
}
