<template>
  <div class="row q-col-gutter-md">
    <div class="col-sm-12 col-md-4" v-for="materia in materias" :key="materia.id">
      <MateriaCard v-bind:materia="materia" v-bind:editar="editar" v-bind:eliminar="eliminar"/>
    </div>
    <div class="col-sm-12 col-md-4" >
      <q-card bordered class="my-card shadow-0 border text-center full-height flex flex-center">
        <q-card-section>
          <q-btn flat color="transparent" @click="agregarModal = true">
            <q-icon name="control_point" class="text-cyan" style="font-size: 2.2em;" />
            <span class="text-cyan text-uppercase text-body2 text-bold block">Agregar Materia</span>
          </q-btn>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="agregarModal">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 text-cyan text-uppercase">Nueva Materia</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <MateriaFormulario v-bind:model="nuevo" v-bind:reset="reset" v-bind:agregar="agregar"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import MateriaCard from './MateriaCard'
import { ELIMINAR_MATERIA, AGREGAR_MATERIA } from '../store/materia/types'
import MateriaFormulario from './MateriaFormulario'

export default {
  name: 'MateriaLista',
  components: { MateriaFormulario, MateriaCard },
  props: {
    materias: Array
  },
  data () {
    return {
      agregarModal: false,
      nuevo: {
        nombre: '',
        docente: '',
        email: '',
        dia: '',
        horario: ''
      }
    }
  },
  methods: {
    editar: function (id) {
      console.log('editar', id)
    },
    eliminar: function (id) {
      this.$store.dispatch(`materia/${ELIMINAR_MATERIA}`, id)
    },
    agregar: function () {
      this.agregarModal = false
      const data = {
        cuatrimestre: this.$store.state.cuatrimestre.actual,
        data: this.nuevo
      }
      this.$store.dispatch(`materia/${AGREGAR_MATERIA}`, data)
      this.reset()
    },
    reset: function () {
      this.nuevo = {
        nombre: '',
        docente: '',
        email: '',
        dia: '',
        horario: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
