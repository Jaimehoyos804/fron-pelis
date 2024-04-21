import React from 'react'
import sherk from '../Img/Shrek.png'
export default function card() {
  return (
    <div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {medias.map(media => (
        <div className="col">
          <div className="card">
            <img src={sherk} className="card-img-top" alt={media.titulo} />
            <div className="card-body">
              <h5 className="card-title">{media.titulo}</h5>
              <p className="card-text">{media.sinopsis}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
