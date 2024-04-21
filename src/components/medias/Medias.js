import React, { useEffect, useState } from 'react';
import { obtenerMedias } from '../../services/MediasService';
import sherk from '../Img/Shrek.png';
import era from '../Img/laEra.jpg';
import sanky from '../Img/sanky.jpg';

export default function App() {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    obtenerMedias().then(response => {
      setMedias(response.data);
    });
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {medias.map(media => (
          <div className="col" key={media._id}>
            <div className="card">
              {media.titulo === 'La era de hielo' ? (
                <img src={era} className="card-img-top" alt={media.titulo} />
              ) : media.titulo === 'Sanky Panky' ? (
                <img src={sanky} className="card-img-top" alt={media.titulo} />
              ) : (
                <img src={sherk} className="card-img-top" alt={media.titulo} />
              )}
              <div className="card-body">
                <h5 className="card-title">{media.titulo}</h5>
                <p className="card-text">{media.sinopsis}</p>
                <p className="card-text">{media.url}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
