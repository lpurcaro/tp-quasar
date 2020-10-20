<template>
  <q-page>
    <div class="row">
      <div class="col-3">
        <CuatrimestreLista v-bind:cuatrimestres="cuatrimestres" v-bind:actual="actual"/>
      </div>
      <div class="col-9">
        <CuatrimestreData v-bind:materias="materias" v-bind:cuatrimestre="cuatrimestreSeleccionado"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import CuatrimestreLista from '../components/CuatrimestreLista'
import CuatrimestreData from '../components/CuatrimestreData'

import { SELECCIONAR_CUATRIMESTRE, CARGAR_CUATRIMESTRES } from '../store/cuatrimestre/types'
import { CARGAR_MATERIAS } from '../store/materia/types'

export default {
  name: 'Cuatrimestre',
  components: {
    CuatrimestreData,
    CuatrimestreLista
  },
  mounted () {
    this.$store.dispatch(`cuatrimestre/${CARGAR_CUATRIMESTRES}`)
    this.$store.dispatch(`materia/${CARGAR_MATERIAS}`)
    this.$store.dispatch(`cuatrimestre/${SELECCIONAR_CUATRIMESTRE}`, this.cuatrimestres.length - 1)
  },
  computed: {
    materias: function () {
      return this.$store.state.materia.materias.filter(materia => materia.cuatrimestre === this.actual)
    },
    cuatrimestreSeleccionado: function () {
      return this.$store.state.cuatrimestre.cuatrimestres.filter(cuatrimestre => cuatrimestre.id === this.actual)[0]
    },
    cuatrimestres: function () {
      return this.$store.state.cuatrimestre.cuatrimestres
    },
    actual: function () {
      return this.$store.state.cuatrimestre.actual
    }
  }
}
</script>

<style scoped>

</style>
