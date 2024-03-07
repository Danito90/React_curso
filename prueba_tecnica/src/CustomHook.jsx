import './App.css'
import { Otro } from './Componentes/Otro.jsx'
import { useCatFact } from './services/hooks/useCatFact.js'
import { useCatImage } from './services/hooks/useCatImage.js'

// Hay un problema con la Api, no esta activa y no devuelve la url, pero el codigo es correcto y funciona
function CustomHook () {
  const { fact, refreshRandomFact } = useCatFact()
  const { ImageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1 className="App">Aplicacion de gatitos</h1><br />
      <button onClick = { handleClick }>Cargar un nuevo fact</button>

      <br />

      <section>
        {ImageUrl && <img src = {`${ImageUrl}`} alt={`Imagen conseguida a partir de las primeras 3 palabras: ${fact}`} id='imgFact' style = {{ width: '300px', height: '300px' }}/>}
        {fact && <p>{fact}</p>}
      </section>

      <br />
      <div className='horizontal'>
        <Otro/><Otro/><Otro/><Otro/>
      </div>
      <br />
    </main>
  )
}

export default CustomHook
