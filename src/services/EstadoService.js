import { axiosConfig } from "../configuration/axiosConfig"


const obtenerEstado = (estado = true) => {
    return axiosConfig.get('EstadoEquipo?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


const crearEstado = (data) => {
    return axiosConfig.post('EstadoEquipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


const editarEstadoPorID = (estadoId, data) => {
    return axiosConfig.put('EstadoEquipo/'+estadoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


 const borrarEstadoPorID = (tipoId) => {
    return axiosConfig.delete('EstadoEquipo/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


 const obtenerEstadoPorID = (tipoId) => {
    return axiosConfig.get('EstadoEquipo/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerEstado,
    crearEstado,
    editarEstadoPorID,
    borrarEstadoPorID,
    obtenerEstadoPorID
}