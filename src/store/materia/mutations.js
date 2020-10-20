import * as types from './types'

export default {
  [types.CARGAR_MATERIAS]: function (state, data) {
    state.materias = data
  },
  [types.ELIMINAR_MATERIAS]: function (state, data) {
    state.materias = state.materias.filter(materia => materia.cuatrimestre !== data)
  },
  [types.ELIMINAR_MATERIA]: function (state, data) {
    state.materias = state.materias.filter(materia => materia.id !== data)
  },
  [types.AGREGAR_MATERIA]: function (state, data) {
    state.materias.push(data)
  }
}
