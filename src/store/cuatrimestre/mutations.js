import * as types from './types'

export default {
  [types.AGREGAR_CUATRIMESTRE]: function (state, data) {
    state.cuatrimestres.push(data)
  },
  [types.ELIMINAR_CUATRIMESTRE]: function (state, data) {
    state.cuatrimestres.splice(data.idx, 1)
  },
  [types.EDITAR_CUATRIMESTRE]: function (state, { idx, data }) {
    state.cuatrimestres[idx].fechaInicio = data.fechaInicio
    state.cuatrimestres[idx].fechaFin = data.fechaFin
    state.cuatrimestres[idx].title = data.title
  },
  [types.SELECCIONAR_CUATRIMESTRE]: function (state, data) {
    state.actual = data
  },
  [types.CARGAR_CUATRIMESTRES]: function (state, data) {
    state.cuatrimestres = data
  }
}
