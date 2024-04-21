import React, { useEffect, useState } from 'react';
import { obtenerDirectores } from '../../services/DirectoresService';
import Andrew from '../Img/Andrew.jpg';
import Chris from '../Img/Chris.jpg';
import José from '../Img/José Enrique Pintor.jpg';

export default function App() {
  const [directores, setDirectores] = useState([]);

  useEffect(() => {
    obtenerDirectores().then(response => {
      setDirectores(response.data);
    });
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {directores.map(directores => (
          <div className="col" key={directores._id}>
            <div className="card">
              {directores.nombre === 'Andrew Adamson' ? (
                <img src={Andrew} className="card-img-top" alt={directores.nombre} height= '553px' />
              ) : directores.nombre === 'Chris Wedge' ? (
                <img src={Chris} className="card-img-top" alt={directores.nombre}  height="553px"/>
              ) : (
                <img src={José} className="card-img-top" alt={directores.nombre} height= "550px" />
              )}
              <div className="card-body">
                <h5 className="card-title">{directores.nombre}</h5>
                <h5 className="card-title">{directores.estado}</h5>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

