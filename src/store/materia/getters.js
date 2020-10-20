import { materiasData } from 'src/services'

export default {
  listadoMaterias: (state) => {
    if (state.materias.length === 0) {
      state.materias = materiasData()
    }

    return state.materias
  }
}
