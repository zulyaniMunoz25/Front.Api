import { axiosConfig } from "../configuration/axiosConfig"

const obtenerMarca = (estado = true) => {
    return axiosConfig.get('MarcaEquipo?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


const crearMarca = (data) => {
    return axiosConfig.post('MarcaEquipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


const editarMarcaPorID = (tipoId, data) => {
    return axiosConfig.put('MarcaEquipo/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const borrarMarcaPorID = (tipoId) => {
    return axiosConfig.delete('MarcaEquipo/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const obtenerMarcaPorID = (tipoId) => {
    return axiosConfig.get('MarcaEquipo/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerMarca,
    crearMarca,
    editarMarcaPorID,
    borrarMarcaPorID,
    obtenerMarcaPorID
}