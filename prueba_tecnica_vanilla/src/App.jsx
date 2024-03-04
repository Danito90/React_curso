import { useState } from 'react'
export function App() {
    const [fact, setfact] = useState('texto de prueba')

    return (
        <>
            <div className="App">Aplicacion de gatitos</div>
            <h1>{fact}</h1>
        </>
    )
}