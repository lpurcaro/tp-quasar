import * as types from './types'
import { materiasData } from 'src/services'

export default {
  [types.CARGAR_MATERIAS]: function ({ commit, state }) {
    if (state.materias.length === 0) {
      commit(types.CARGAR_MATERIAS, materiasData())
    }
  },
  [types.ELIMINAR_MATERIAS]: function ({ commit }, data) {
    commit(types.ELIMINAR_MATERIAS, data)
  }
}
