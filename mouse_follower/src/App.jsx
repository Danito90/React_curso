import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log(`Estado: ${enabled}`)
    const handleMove = (event) => {
      const { clientX, clientY } = event
      // console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      // Evento que escucha cuando se produce un cambio en la ventana principal, en este caso del mouse.
      // Cuando hay un cambio llama a la funcio nen el segundo parametro
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      // Limpiar efectos
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 10, y: 10 })
      console.log('Cleanup')
    }
  },
  [enabled]
  )

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
      <section>
        <h6>{`Posicion x: ${position.x}`} - {`Posicion y: ${position.y}`}</h6>
      </section>
    </>
  )
}

function App () {
  const [show, setShow] = useState(true)
  return (
    <main>
      {show && <FollowMouse></FollowMouse>}
      <button onClick={() => setShow(!show)}>{show ? 'Desmontar' : 'Montar'} el componente</button>
    </main>
  )
}

export default App
