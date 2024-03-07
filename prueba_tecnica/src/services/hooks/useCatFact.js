import { useState, useEffect } from 'react'
import { getRandomFact2 } from '../facts'

export function useCatFact () {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    getRandomFact2().then(newFact => setFact(newFact))
  }

  useEffect(() => {
    // Obtiene una frase random y lo manda a setFact
    refreshFact()
  }, [])
  return { fact, refreshRandomFact: refreshFact }
}
// refreshRandomFact -> es la funcion que hace la peticion fetch y regresa un fact aleatorio
