import { axiosConfig } from "../configurations/axiosConfig"
const obtenerDirectores = (estado=true) => {
  return axiosConfig.get('director?estado='+estado, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
}
export {
  obtenerDirectores
}