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
  },
  [types.ELIMINAR_MATERIA]: function ({ commit }, data) {
    commit(types.ELIMINAR_MATERIA, data)
  },
  [types.AGREGAR_MATERIA]: function ({ commit, state }, { cuatrimestre, data }) {
    const id = state.materias.length === 0 ? 0 : state.materias[state.materias.length - 1].id + 1

    const materia = {
      nombre: data.nombre,
      cuatrimestre,
      id,
      horario: {
        dia: data.dia,
        horario: data.horario
      },
      docente: {
        nombre: data.docente,
        email: data.email
      }
    }
    commit(types.AGREGAR_MATERIA, materia)
  },
  [types.EDITAR_MATERIA]: function ({ commit, state }, data) {
    const idx = state.materias.findIndex(materia => materia.id === data.id)

    const materia = {
      ...state.materias[idx],
      nombre: data.nombre,
      horario: {
        dia: data.dia,
        horario: data.horario
      },
      docente: {
        nombre: data.docente,
        email: data.email
      }
    }
    console.log('materia', materia, idx)
    commit(types.EDITAR_MATERIA, { idx, materia })
  }
}
