import Vue from 'vue'
import Vuex from 'vuex'

import carrera from './carrera'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    carrera
  }
})
