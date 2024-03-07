import { useState, useEffect } from 'react'

const POINT_URL = 'https://api.thecatapi.com/v1/images/search'

export function useCatImage ({ fact }) {
  const [ImageUrl, setImageUrl] = useState('')
  useEffect(() => {
    if (!fact) return
    // use otra api que la que decia el proyecto, porque ya no tiene la prop url
    fetch(POINT_URL)
      .then(response => response.json())
      .then((imageData) => {
        const { url } = imageData[0]
        setImageUrl(url)
      })
  }, [fact])
  return { ImageUrl }
  // return { ImageUrl, setImageUrl }
  // si no se usa, osea si no queremos que se cambie el estado desde fuera del custom hook, evitar exportarlo
} // customhook que devuelve un objeto -> {ImageUrl: 'http://...}
