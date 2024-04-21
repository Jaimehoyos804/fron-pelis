import { axiosConfig } from "../configurations/axiosConfig"


const obtenerGeneros = (estado=true) => {
    return axiosConfig.get('generos?estado='+estado, {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
}
const CrearGenero = (data = {}) =>{
  return axiosConfig.post('generos',data, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
}

const EditarGenero = (id,  data = {}) =>{
  return axiosConfig.put('generos/',+id, data, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
}

const BorrarGenero = id =>{
  return axiosConfig.delete('generos/',+id, {}, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
}

export {
    obtenerGeneros,
    CrearGenero,
    EditarGenero,
    BorrarGenero
}