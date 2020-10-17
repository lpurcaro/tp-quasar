import Vue from 'vue'
import Vuex from 'vuex'

import carrera from './carrera'
import cuatrimestre from './cuatrimestre'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    carrera,
    cuatrimestre
  }
})
