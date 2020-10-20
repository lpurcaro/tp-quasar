import * as Estado from '../enums/estadoMateria'

export default [
  {
    cuatrimestre: 0,
    nombre: 'Organizacion Empresarial',
    horario: {
      dia: 'Lunes',
      horario: '21:40'
    },
    docente: {
      nombre: 'Patricia Fridman',
      email: 'pfridman@ort.edu.ar'
    },
    parciales: [
      {
        fecha: '10-10-2019',
        temas: [
          'Empresa',
          'Organizacion',
          'Misión',
          'Visión'
        ]
      }
    ],
    estado: Estado.FINAL_PENDIENTE
  },
  {
    cuatrimestre: 0,
    nombre: 'Matemática',
    horario: {
      dia: 'Jueves',
      horario: '19:00'
    },
    docente: {
      nombre: 'Griselda Mesegue',
      email: 'gmesegue@ort.edu.ar'
    },
    parciales: [
      {
        fecha: '13-10-2019',
        temas: [
          'Proporcionalidad',
          'Lógica proposicional'
        ]
      }
    ],
    estado: Estado.RECURSADO
  },
  {
    cuatrimestre: 2,
    nombre: 'Nuevas Tecnologías 2',
    horario: {
      dia: 'Martes',
      horario: '19:00'
    },
    docente: {
      nombre: 'Gabriel Barrera',
      email: 'gbarrera@ort.edu.ar'
    },
    parciales: [
      {
        fecha: '10-10-2020',
        temas: [
          'Vuejs',
          'Quasar',
          'Route'
        ]
      }
    ],
    estado: Estado.CURSANDO
  }
]
