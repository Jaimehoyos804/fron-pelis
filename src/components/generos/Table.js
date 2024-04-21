import React from 'react'
import dayjs from 'dayjs'
export default function Table({ generos = [] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripc.</th>
          <th scope="col">Creado</th>
          <th scope="col">Estado</th>
          <th scope='col'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          generos.map((genero, index) => {
            return (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{genero.nombre}</td>
                <td>{genero.descripcion}</td>
                <td>{dayjs(genero.fechaCreacion).format('YYYY-MM-DD')}</td>
                <td>
                  {genero.estado ? 'Activo' : 'Inactivo'}
                </td>
                <td>
                  <button type="button" className="btn btn-success"
                  >
                    Editar
                  </button>
                  <button type='button' className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )
          })
        }

      </tbody>
    </table>
  )
}
