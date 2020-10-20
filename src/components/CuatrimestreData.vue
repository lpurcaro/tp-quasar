<template>
  <div class="q-pa-md">
    <div v-if="cuatrimestre === undefined">
      <CuatrimestreEmpty/>
    </div>
    <div v-else >
      <div class="flex justify-between">
        <div>
          <h2 class="text-cyan text-uppercase text-h4 no-margin">{{cuatrimestre.title}}</h2>
          <h3 class="text-grey-6 text-uppercase text-body2">{{cuatrimestre.fechaInicio}} al {{cuatrimestre.fechaFin}}</h3>
        </div>
        <div>
          <q-btn icon="edit" label="Editar" stack color="cyan" class="q-ml-md" @click="editModal = true"/>
          <q-btn icon="delete" label="Eliminar" stack color="cyan" class="q-ml-md" @click="deleteModal = true"/>
        </div>
      </div>
      <MateriaCard v-for="materia in materias" :key="materia.id"/>
      {{cuatrimestre}}

      <!--    editar cuatrimestre-->
      <q-dialog v-model="editModal">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6 text-cyan text-uppercase">Editar Cuatrimestre</div>
            <div class="text-grey-6 text-body2">Seleccioná las nuevas fechas de comienzo y fin del cuatrimestre</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-date color="cyan" v-model="fechas" range />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancelar" v-close-popup color="cyan" @click="cancelar()"/>
            <q-btn flat label="Editar" v-close-popup color="cyan" @click="editar(fechas)"/>
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!--    eliminar cuatrimestre-->
      <q-dialog v-model="deleteModal">
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="error_outline" color="cyan" text-color="white" />
            <span class="q-ml-sm text-grey-6 text-body2">Si elminás este cuatrimestre vas a perder todos los datos que cargaste.</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="cyan" v-close-popup />
            <q-btn flat label="Eliminar Cuatrimestre" color="cyan" v-close-popup @click="eliminar()"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import MateriaCard from './MateriaCard'
import { EDITAR_CUATRIMESTRE, ELIMINAR_CUATRIMESTRE } from '../store/cuatrimestre/types'
import { ELIMINAR_MATERIAS } from '../store/materia/types'
import CuatrimestreEmpty from './CuatrimestreEmpty'

export default {
  name: 'CuatrimestreData',
  components: { CuatrimestreEmpty, MateriaCard },
  props: {
    materias: Array,
    cuatrimestre: Object
  },
  data () {
    return {
      editModal: false,
      deleteModal: false,
      fechas: {}
    }
  },
  methods: {
    editar: function (data) {
      this.$store.dispatch(`cuatrimestre/${EDITAR_CUATRIMESTRE}`, data)
      this.fechas = {}
    },
    cancelar: function () {
      this.fechas = {}
    },
    eliminar: function () {
      this.deleteModal = false
      this.$store.dispatch(`cuatrimestre/${ELIMINAR_CUATRIMESTRE}`)
      this.$store.dispatch(`materia/${ELIMINAR_MATERIAS}`, this.$store.state.cuatrimestre.actual)
    }
  }
}
</script>

<style scoped>

</style>
