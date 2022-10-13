import React, { useEffect, useState } from 'react'
import Tarjeta from './Tarjeta'
import './App.css'

const App = () => {
  const [pag, setPag] = useState(0)
  const [imagenes, setImagenes] = useState([])

  const getImagesByStickers = async () => {

    const consulta = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=lB7AZAeUH2C5Aj5PgdNSgHNXqeMHEguC&offset=${ pag }0&q=casa+de+papel&limit=10`)
    const {data} = await consulta.json()
    console.log(data)
    const giphyImages = data.map(imgGiphy => ({
      id: imgGiphy.id,
      imagen: imgGiphy.images.downsized.url,
      titulo: imgGiphy.title,
      usuario: imgGiphy.username
    }))
    setImagenes(giphyImages)
    console.log(imagenes)

  }

  useEffect(() => {
    getImagesByStickers()
  }, [pag])

  const adelantarPagina = () => {
    setPag( pag + 1)
  }

  const retrocederPagina = () => {
    if (pag===0) {
      return
    }
    setPag( pag - 1)
  }
  
  return (
    <div className='container'>
      <h1 className='text-center text-uppercase my-3'>Aplicación de React</h1>
      <div className='d-flex justify-content-evenly'>
        <button className="btn btn-light" onClick={retrocederPagina} disabled={ pag===0 }>
          Atrás
        </button>
        <button className="btn btn-light" onClick={adelantarPagina}>
          Siguiente
        </button>
      </div>

      <div className='d-flex justify-content-between flex-wrap'>
        {
          imagenes.map(imagen => (
            <Tarjeta key={imagen.id} {...imagen} />
          ))
        }
      </div>
    </div>
  )
}

export default App