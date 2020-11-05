<template>
  <q-page>
    <div class="text-center">
      <h2 class="text-orange text-uppercase text-h4">{{nombre}}</h2>
      <h3 class="text-grey-6 text-uppercase text-body2">Duración: {{duracion}} años</h3>
    </div>

    <div class="q-pa-md">
      <div class="row justify-between">
        <div class="col-sm-12 col-md-3" v-for="(materias, idx) in materiasPorCuatri" :key="idx">
          <CuatrimestreCarrera
            v-bind:nro="idx + 1"
            v-bind:materias="materias"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { infoCarrera } from '../services'
import CuatrimestreCarrera from '../components/CuatrimestreCarrera'

export default {
  name: 'Carrera',
  components: { CuatrimestreCarrera },
  data () {
    return {
      nombre: '',
      duracion: '',
      materiasPorCuatri: []
    }
  },
  mounted () {
    const carrera = infoCarrera()
    this.nombre = carrera.nombre
    this.duracion = carrera.duracion
    this.materiasPorCuatri = carrera.materiasPorCuatri
  }
}
</script>

<style scoped>
  .my-card {
    width: 90%;
    margin: auto;
  }
</style>
