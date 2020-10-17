import * as types from './types'

export default {
  [types.AGREGAR_CUATRIMESTRE]: function (state, data) {
    state.cuatrimestres.push(data)
  },
  [types.ELIMINAR_CUATRIMESTRE]: function (state, data) {
    delete state.cuatrimestres[data.id]
  },
  [types.EDITAR_FECHA_INICIO]: function (state, data) {
    state.cuatrimestres[data.id].fechaInicio = data.fechaInicio
  },
  [types.EDITAR_FECHA_FIN]: function (state, data) {
    state.cuatrimestres[data.id].fechaFin = data.fechaFin
  },
  [types.SELECCIONAR_CUATRIMESTRE]: function (state, data) {
    state.actual = data
  }
}
