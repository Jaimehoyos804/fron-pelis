import { axiosConfig } from "../configurations/axiosConfig"
const obtenerTipos = (estado=true) => {
    return axiosConfig.get('tipo', {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
}
export {
    obtenerTipos
}