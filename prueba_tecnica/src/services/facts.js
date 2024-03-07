const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  // inicia una solicitud de red y devuelve un objeto Promise
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    // Toma una función de devolución de llamada como argumento.
    .then(res => res.json())

    // Recibe los datos JSON analizados, para actualizar la variable de estado
    // del json tomamos  el valor de la propiedad "fact"
    .then((data) => {
      // console.log(data)
      // Desestructuración para extraer la fact propiedad
      const { fact } = data
      // pasamos la propiedad fact

      return fact
    }
    )
}

// Podemos tambien armarlo con asyn y await
export const getRandomFact2 = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  if (!response.ok) {
    throw new Error('HTTP error! status: ' + response.status)
  }
  const data = await response.json()
  const { fact } = data
  return fact
}
