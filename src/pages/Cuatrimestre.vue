<template>
  <q-page>
    <div class="row">
      <div class="col-3">
        <CuatrimestreLista v-bind:listado="listado" v-bind:actual="actual"/>
      </div>
      <div class="col-9">
        <CuatrimestreData/>
      </div>
    </div>
  </q-page>
</template>

<script>
import CuatrimestreLista from '../components/CuatrimestreLista'
import CuatrimestreData from '../components/CuatrimestreData'

import { SELECCIONAR_CUATRIMESTRE } from '../store/cuatrimestre/types'

export default {
  name: 'Cuatrimestre',
  components: {
    CuatrimestreData,
    CuatrimestreLista
  },
  data () {
    return {
      seleccionado: {},
      listado: []
    }
  },
  mounted () {
    this.seleccionado = {}
    this.listado = this.$store.getters['cuatrimestre/listadoCuatrimestres']
    this.$store.dispatch(`cuatrimestre/${SELECCIONAR_CUATRIMESTRE}`, this.listado.length - 1)
  },
  computed: {
    actual: function () {
      return this.$store.state.cuatrimestre.actual
    }
  }
}
</script>

<style scoped>

</style>
