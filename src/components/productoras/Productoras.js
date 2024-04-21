import React, { useEffect, useState } from 'react'
import { obtenerProductoras } from '../../services/ProductorasService'
import Table from '../productoras/Table'

export default function Productoras() {
  
  const [productoras, setProductoras] = useState([])
  const [estado, setEstado] = useState(true)
  const [productora, setProductora] = useState({
    nombre: "",
    descripcion: "",
    estado: true
  })

  useEffect(() => {
    obtenerTodasLasProductoras()
  }, [estado])

  const obtenerTodasLasProductoras = async () => {
    try {
      const { data } = await obtenerProductoras(estado)
      setProductoras(data)
    } catch (e) {
      console.error(e)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProductora({
      ...productora,
      [name]: value
    })
  }



  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={estado}
          onChange={() => setEstado(!estado)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Activos/Incativos</label>
      </div>
      <Table productoras={productoras} />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
      >
        Agregar Productora
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva Productora</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="nombre"
                    value={productora.nombre}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Descripcion:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="descripcion"
                    value={productora.descripcion}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-primary">Guardar Productora</button>
              </form>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
