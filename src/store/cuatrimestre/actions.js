import * as types from './types'

const convertDate = function (date) {
  const dateParts = date.split('/')
  return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
}

const getCuatrimestreTitle = function (fechaInicio) {
  const dateParts = fechaInicio.split('-')
  const cuatrimestre = parseInt(dateParts[1]) >= 8 ? '2C ' : '1C'
  return `${cuatrimestre} ${dateParts[2]}`
}

export default {
  [types.AGREGAR_CUATRIMESTRE]: function ({ commit, state }, data) {
    const fechaInicio = convertDate(data.from)
    const fechaFin = convertDate(data.to)

    const title = getCuatrimestreTitle(fechaInicio)

    const cuatrimestre = {
      id: 0,
      title,
      fechaInicio,
      fechaFin,
      materias: 0
    }

    commit(types.AGREGAR_CUATRIMESTRE, cuatrimestre)
  },
  [types.ELIMINAR_CUATRIMESTRE]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.ELIMINAR_CUATRIMESTRE, data)
  },
  [types.EDITAR_FECHA_INICIO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.EDITAR_FECHA_INICIO, data)
  },
  [types.EDITAR_FECHA_FIN]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.EDITAR_FECHA_FIN, data)
  },
  [types.SELECCIONAR_CUATRIMESTRE]: function ({ commit, state }, data) {
    commit(types.SELECCIONAR_CUATRIMESTRE, data)
  }
}
