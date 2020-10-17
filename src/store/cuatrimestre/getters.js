import moment from 'moment'
import { cuatrimestresData } from 'src/services'

export default {
  avanceCuatrimestre: (state) => {
    const x = moment('2020-08-03')
    const y = moment('2020-12-17')

    console.log('cantidad de semanas', x.diff(y, 'week'))

    // const cuatrimestreSeleccionado = state.cuatrimestres[state.actual]
    // let totalSemanas = cuatrimestreSeleccionado.fechaFin - cuatrimestreSeleccionado.fechaInicio
  },
  listadoCuatrimestres: (state) => {
    if (state.cuatrimestres.length === 0) {
      state.cuatrimestres = cuatrimestresData()
    }
    return state.cuatrimestres
  }
}
