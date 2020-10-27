import Vue from 'vue'
import Vuex from 'vuex'

import cuatrimestre from './cuatrimestre'
import materia from './materia'

Vue.use(Vuex)

const vue = new Vuex.Store({
  modules: {
    cuatrimestre,
    materia
  }
})

export default vue
