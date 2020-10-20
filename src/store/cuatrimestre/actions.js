import * as types from './types'
import { cuatrimestresData } from 'src/services'

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
    // TODO Falta la validacion de que ya exista el cuatrimestre

    const fechaInicio = convertDate(data.from)
    const fechaFin = convertDate(data.to)

    const title = getCuatrimestreTitle(fechaInicio)
    // busco el ultimo id y seteo el nuevo
    const id = state.cuatrimestres.length === 0 ? 0 : state.cuatrimestres[state.cuatrimestres.length - 1].id + 1

    const cuatrimestre = {
      id,
      title,
      fechaInicio,
      fechaFin,
      materias: 0
    }

    commit(types.AGREGAR_CUATRIMESTRE, cuatrimestre)
    commit(types.SELECCIONAR_CUATRIMESTRE, id)
  },
  [types.ELIMINAR_CUATRIMESTRE]: function ({ commit, state }) {
    const idx = state.cuatrimestres.findIndex(cuatrimestre => cuatrimestre.id === state.actual)

    commit(types.ELIMINAR_CUATRIMESTRE, { idx })

    let ultimo = 0
    if (state.cuatrimestres.length > 0) {
      ultimo = state.cuatrimestres[state.cuatrimestres.length - 1].id
    }

    commit(types.SELECCIONAR_CUATRIMESTRE, ultimo)
  },
  [types.EDITAR_CUATRIMESTRE]: function ({ commit, state }, data) {
    const fechaInicio = convertDate(data.from)
    const fechaFin = convertDate(data.to)

    const title = getCuatrimestreTitle(fechaInicio)
    const idx = state.cuatrimestres.findIndex(cuatrimestre => cuatrimestre.id === state.actual)

    const cuatrimestre = {
      idx,
      data:
        {
          fechaInicio,
          fechaFin,
          title
        }
    }

    commit(types.EDITAR_CUATRIMESTRE, cuatrimestre)
  },
  [types.SELECCIONAR_CUATRIMESTRE]: function ({ commit, state }, data) {
    commit(types.SELECCIONAR_CUATRIMESTRE, data)
  },
  [types.CARGAR_CUATRIMESTRES]: function ({ commit, state }) {
    if (state.cuatrimestres.length === 0) {
      commit(types.CARGAR_CUATRIMESTRES, cuatrimestresData())
    }
  }
}
