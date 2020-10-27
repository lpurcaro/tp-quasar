<template>
  <q-card bordered class="my-card shadow-0 border">
    <q-card-section class="row justify-between">
      <span class="text-body2 text-bold text-cyan text-uppercase">{{materia.nombre}}</span>
      <q-fab color="cyan" icon="keyboard_arrow_down" direction="down" padding="xs">
        <q-fab-action color="cyan" @click="editModal = true" icon="edit" padding="5px"/>
        <q-fab-action color="cyan" @click="deleteModal = true" icon="delete_outline" padding="5px"/>
      </q-fab>
    </q-card-section>
    <q-card-section class="q-pt-none">
     <MateriaData v-bind:value="materia.docente.nombre" title="Docente" icon="person_outline"/>
     <MateriaData v-bind:value="materia.docente.email" title="Email" icon="mail_outline"/>
     <MateriaData v-bind:value="materia.horario.dia" title="Dia de cursada" icon="event_available"/>
     <MateriaData v-bind:value="materia.horario.horario + 'hs'" title="Horario" icon="query_builder"/>
    </q-card-section>

    <q-dialog v-model="editModal">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 text-cyan text-uppercase">Editar Materia</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <MateriaFormulario v-bind:model="edicion" v-bind:reset="reset" v-bind:agregar="editar"/>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="deleteModal">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="error_outline" color="cyan" text-color="white" />
          <span class="q-ml-sm text-grey-6 text-body2">Si elminás esta materia vas a perder todos los datos que cargaste.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="cyan" v-close-popup />
          <q-btn flat label="Eliminar Materia" color="cyan" v-close-popup @click="eliminar(materia.id)"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
import MateriaData from './MateriaData'
import MateriaFormulario from './MateriaFormulario'
import { EDITAR_MATERIA } from '../store/materia/types'

export default {
  name: 'MateriaCard',
  components: { MateriaFormulario, MateriaData },
  props: {
    materia: Object,
    eliminar: Function
  },
  data () {
    return {
      deleteModal: false,
      editModal: false,
      edicion: {
        id: '',
        nombre: '',
        docente: '',
        email: '',
        dia: '',
        horario: ''
      }
    }
  },
  mounted () {
    this.edicion.id = this.materia.id
    this.edicion.nombre = this.materia.nombre
    this.edicion.docente = this.materia.docente.nombre
    this.edicion.email = this.materia.docente.email
    this.edicion.dia = this.materia.horario.dia
    this.edicion.horario = this.materia.horario.horario
  },
  methods: {
    reset: function () {
      this.edicion = {
        id: '',
        nombre: '',
        docente: '',
        email: '',
        dia: '',
        horario: ''
      }
    },
    editar: function () {
      this.$store.dispatch(`materia/${EDITAR_MATERIA}`, this.edicion)
      this.editModal = false
    }
  }
}
</script>

<style scoped>

</style>
