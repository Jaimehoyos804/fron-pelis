import {axiosConfig } from '../configurations/axiosConfig'

const obtenerMedias = () => {
    return axiosConfig.get('media', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  
  export { obtenerMedias };