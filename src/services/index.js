import materias from 'src/services/carreraData'
import cuatrimestres from 'src/services/cuatrimestresData'

export const infoCarrera = () => {
  return {
    nombre: 'Analista de sistemas',
    duracion: '2',
    materiasPorCuatri: materias
  }
}

export const cuatrimestresData = () => {
  return cuatrimestres
}
