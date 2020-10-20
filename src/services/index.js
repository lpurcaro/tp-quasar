import materiasCarrera from 'src/services/carreraData'
import cuatrimestres from 'src/services/cuatrimestresData'
import materias from 'src/services/materiasData'

export const infoCarrera = () => {
  return {
    nombre: 'Analista de sistemas',
    duracion: '2',
    materiasPorCuatri: materiasCarrera
  }
}

export const cuatrimestresData = () => {
  return cuatrimestres
}

export const materiasData = () => {
  return materias
}
