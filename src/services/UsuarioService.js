import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los usuarios
 */
const obtenerUsuario = (estado = true) => {
    return axiosConfig.get('Usuarios?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea Usuario
 */
const crearUsuario = (data, email) => {
    return axiosConfig.post('Usuarios', data, email, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualizar usuario por id
 */
const editarUsuarioPorID = (usuarioId, data, ) => {
    return axiosConfig.put('Usuarios/'+usuarioId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra usuario por ID
 */
 const borrarUsuarioPorID = (tipoId) => {
    return axiosConfig.delete('Usuarios/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta usuario por ID
 */
 const obtenerUsuarioPorID = (tipoId) => {
    return axiosConfig.get('Usuarios/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerUsuario,
    crearUsuario,
    editarUsuarioPorID,
    borrarUsuarioPorID,
    obtenerUsuarioPorID
}