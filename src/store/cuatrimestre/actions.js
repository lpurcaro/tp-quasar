import * as types from './types'

export default {
  [types.AGREGAR_CUATRIMESTRE]: function ({ commit, state }, data) {
    // Aca van las validaciones y la logica de negocio
    console.log(state)
    commit(types.AGREGAR_CUATRIMESTRE, data)
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
  }
}
