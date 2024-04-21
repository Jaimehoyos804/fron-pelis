import React from 'react'
import dayjs from 'dayjs'
export default function Table({ productoras = [] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Sloglan.</th>
          <th scope="col">Creado</th>
          <th scope="col">Estado</th>
          <th scope='col'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          productoras.map((productoras, index) => {
            return (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{productoras.nombre}</td>
                <td>{productoras.sloglan}</td>
                <td>{dayjs(productoras.fechaCreacion).format('YYYY-MM-DD')}</td>
                <td>
                  {productoras.estado ? 'Activo' : 'Inactivo'}
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
