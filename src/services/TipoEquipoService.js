import { axiosConfig } from "../configuration/axiosConfig";

/**
 * Obtiene todos los tipos de equipo
 */
const obtenerTipoEquipo = (estado = true) => {
    return axiosConfig.get('TipoEquipo?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea tipo de equipo
 */
const crearTipoEquipo = (data = {}) => {
    return axiosConfig.post('TipoEquipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza un tipo de equipo por ID
 */
const editarTipoEquipoPorID = (tipoId, data) => {
    return axiosConfig.put('TipoEquipo/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra un tipo de equipo por ID
 */
 const borrarTipoEquipoPorID = (tipoId) => {
    return axiosConfig.delete('TipoEquipo/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta un tipo de equipo por ID
 */
 const obtenerTipoEquipoPorID = (tipoId) => {
    return axiosConfig.get('TipoEquipo/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerTipoEquipo,
    crearTipoEquipo,
    editarTipoEquipoPorID,
    borrarTipoEquipoPorID,
    obtenerTipoEquipoPorID
}