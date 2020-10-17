<template>
  <q-page>
    <div>Cuatrimestre</div>
    <CuatrimestreLista v-bind="listado"/>
  </q-page>
</template>

<script>
import CuatrimestreLista from '../components/CuatrimestreLista'

export default {
  name: 'Cuatrimestre',
  components: { CuatrimestreLista },
  data () {
    return {
      seleccionado: {},
      listado: []
    }
  },
  mounted () {
    this.seleccionado = '' // Traer los valores del getter, y pregaragar los contenidos con un servicio
    this.listado = ''
  }
}
</script>

<style scoped>

</style>
