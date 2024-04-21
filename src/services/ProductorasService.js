import { axiosConfig } from "../configurations/axiosConfig"
const obtenerProductoras = (estado=true) => {
    return axiosConfig.get('productora?estado='+estado, {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
}
export {
    obtenerProductoras
}