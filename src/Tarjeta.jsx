import React from 'react'

const Tarjeta = ({id, imagen, titulo, usuario}) => {
  return (
    <div className='card d-flex flex-column align-items-center my-3 border rounded '>
        <img className='' src={imagen} alt="sticker"/>
        <div className='card-body'>
            <h5 className='card-title'>Título: {titulo}</h5>
            <h5 className='card-title'>Nombre del usuario: { usuario ? `${usuario}` : 'Sin propietario' }</h5>
        </div>
    </div>
  )
}

export default Tarjeta