import React, { useEffect, useState } from 'react'
import { obtenerTipos } from '../../services/TiposService'
import Table from '../tipos/Table'

export default function Tipos() {
  
  const [tipos, setTipos] = useState([])

  useEffect(() => {
    obtenerTipos().then(response => {
      setTipos(response.data)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={true}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Activos/Incativos</label>
      </div>
      <Table tipos={tipos} />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
      >
        Agregar Tipo
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Tipo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="nombre"
                    value=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Descripcion:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="descripcion"
                    value=""
                  ></textarea>
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-primary">Guardar Tipo</button>
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
