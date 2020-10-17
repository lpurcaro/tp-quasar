const OE = {
  id: 0,
  nombre: 'Organizacion Empresarial',
  cuatrimestre: 0,
  cargaHoraria: 2,
  correlativas: []
}

const II = {
  id: 1,
  nombre: 'Introduccion a la informática',
  cuatrimestre: 0,
  cargaHoraria: 2,
  correlativas: []
}

const FP = {
  id: 2,
  nombre: 'Fundamentos de Programación',
  cuatrimestre: 0,
  cargaHoraria: 6,
  correlativas: []
}

const THP = {
  id: 3,
  nombre: 'Taller de Herramientas de Programación',
  cuatrimestre: 0,
  cargaHoraria: 6,
  correlativas: []
}

const MAT = {
  id: 4,
  nombre: 'Matemática',
  cuatrimestre: 0,
  cargaHoraria: 4,
  correlativas: []
}

const ING = {
  id: 5,
  nombre: 'Inglés Técnico',
  cuatrimestre: 0,
  cargaHoraria: 2,
  correlativas: []
}

const TCI = {
  id: 6,
  nombre: 'Taller de Creatividad e Innovación',
  cuatrimestre: 0,
  cargaHoraria: 2,
  correlativas: []
}

const SAD = {
  id: 7,
  nombre: 'Sistemas Administrativos',
  cuatrimestre: 1,
  cargaHoraria: 2,
  correlativas: [1]
}

const ARQ = {
  id: 8,
  nombre: 'Arquitectura y Sistemas Operativos',
  cuatrimestre: 1,
  cargaHoraria: 2,
  correlativas: []
}

const PI = {
  id: 9,
  nombre: 'Programación I',
  cuatrimestre: 1,
  cargaHoraria: 6,
  correlativas: [2, 3]
}

const TP = {
  id: 10,
  nombre: 'Taller de programación',
  cuatrimestre: 1,
  cargaHoraria: 6,
  correlativas: [2, 3]
}

const NT = {
  id: 11,
  nombre: 'Programación en Nuevas Tecnologías',
  cuatrimestre: 1,
  cargaHoraria: 6,
  correlativas: [2, 3]
}

const BD = {
  id: 12,
  nombre: 'Base de Datos I',
  cuatrimestre: 1,
  cargaHoraria: 2,
  correlativas: []
}

const AMS = {
  id: 13,
  nombre: 'Análisis y Metodologías de Sistemas',
  cuatrimestre: 1,
  cargaHoraria: 4,
  correlativas: [7]
}

const BDII = {
  id: 14,
  nombre: 'Base de Datos II',
  cuatrimestre: 2,
  cargaHoraria: 2,
  correlativas: [12]
}

const PII = {
  id: 15,
  nombre: 'Programación II',
  cuatrimestre: 2,
  cargaHoraria: 6,
  correlativas: [9, 10]
}

const TPII = {
  id: 16,
  nombre: 'Taller de Programación II',
  cuatrimestre: 2,
  cargaHoraria: 6,
  correlativas: [9, 10]
}

const NTII = {
  id: 17,
  nombre: 'Programación en Nuevas Tecnologías II',
  cuatrimestre: 2,
  cargaHoraria: 6,
  correlativas: [9, 10, 11]
}

const PRIII = {
  id: 18,
  nombre: 'Programación III',
  cuatrimestre: 3,
  cargaHoraria: 6,
  correlativas: [15, 16]
}

const TPIII = {
  id: 19,
  nombre: 'Taller de Programación III',
  cuatrimestre: 3,
  cargaHoraria: 6,
  correlativas: [15, 16]
}

const PF = {
  id: 20,
  nombre: 'Proyecto Final',
  cuatrimestre: 3,
  cargaHoraria: 6,
  correlativas: [15, 16, 17]
}

const SIS = {
  id: 21,
  nombre: 'Seguridad e Integridad de Sistemas',
  cuatrimestre: 3,
  cargaHoraria: 2,
  correlativas: []
}

const CS = {
  id: 22,
  nombre: 'Calidad de Software',
  cuatrimestre: 3,
  cargaHoraria: 2,
  correlativas: []
}

const EJ = {
  id: 23,
  nombre: 'Estudios Judaicos',
  cuatrimestre: 3,
  cargaHoraria: 2,
  correlativas: []
}

export default [
  [OE, II, FP, THP, MAT, ING, TCI],
  [SAD, ARQ, PI, TP, NT, BD],
  [AMS, BDII, PII, TPII, NTII],
  [SIS, PF, CS, TPIII, PRIII, EJ]
]
