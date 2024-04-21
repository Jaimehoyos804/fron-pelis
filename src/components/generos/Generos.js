import React, { useEffect, useState } from 'react'
import {CrearGenero, obtenerGeneros } from '../../services/GenerosService'
//import dayjs from 'dayjs'
import Table from './Table'

export default function Generos() {


  const [generos, setGeneros] = useState([])
  const [estado, setEstado] = useState(true)
  const [genero, setGenero] = useState({
    nombre: " ",
    descripcion: " ",
    estado: true
  })


  useEffect(() => {
    obtenerTodos()
  }, [estado])

  const obtenerTodos = async () => {
    try {
      const { data } = await obtenerGeneros(estado)
      setGeneros(data)
    } catch (e) {
      console.error(e)
    }

  }

  const ChangeEstatus = () => {
    setEstado(!estado)
  }
  const handleChnage = e => {
    setGenero({
      ...genero,
      [e.target.name]: e.target.value
    })
  }

  const Guardar = async () => {
    try {
      const resp = await CrearGenero(genero)
      obtenerTodos()
      setGenero({
        nombre: " ",
        descripcion: " ",
        estado: true
      })
      setEstado(true)
      console.log(resp)
    } catch (e) {
      console.log(e)
    }

  }


  return (
    <>
      <div className="form-check form-switch">
        <input onClick={ChangeEstatus} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={estado} />
        <label className="form-check-label" for="flexSwitchCheckChecked">Activos/Incativos</label>
      </div>
      <Table generos={generos} />
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Agregar Generos</button>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Genero</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={Guardar}>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Nombre:</label>
                  <input type="text" className="form-control" id="recipient-name"
                    name="nombre" value={genero.nombre} onChange={handleChnage} />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Descripcion:</label>
                  <textarea className="form-control" id="message-text"
                    name="descripcion" value={genero.descripcion} onChange={handleChnage}></textarea>
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-primary" disabled={genero.nombre.length === 0} >Guardar Generos</button>
                
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
