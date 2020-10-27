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
  },
  [types.EDITAR_MATERIA]: function (state, { idx, materia }) {
    state.materias[idx].cuatrimestre = materia.cuatrimestre
    state.materias[idx].docente = materia.docente
    state.materias[idx].nombre = materia.nombre
    state.materias[idx].estado = materia.estado
    state.materias[idx].horario = materia.horario
    state.materias[idx].parciales = materia.parciales
  }
}
