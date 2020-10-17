<template>
  <div class="q-pa-md">
    <q-list bordered separator class="text-cyan text-bold border q-card q-card--bordered shadow-0 border-color-cyan">
      <q-item class="q-pa-lg">
        <q-item-section>
          <q-item-label class="text-cyan text-uppercase text-center text-h6">Cuatrimestres</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable
              v-for="(cuatrimestre, idx) in listado"
              :key="cuatrimestre.id"
              v-on:click="select(cuatrimestre.id)"
              v-bind:active="idx === actual"
              active-class="bg-teal-1 text-cyan">
        <q-item-section>
          <q-item-label>{{cuatrimestre.title}}</q-item-label>
          <q-item-label caption lines="2">{{cuatrimestre.fechaInicio}} al {{cuatrimestre.fechaFin}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge color="cyan" :label="cuatrimestre.materias" />
        </q-item-section>
      </q-item>
      <q-item clickable  @click="showModal = true">
        <q-item-section>
          <q-item-label>Agregar nuevo Cuatrimestre</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="control_point" color="cyan" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-dialog v-model="showModal">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 text-cyan text-uppercase">Nuevo Cuatrimestre</div>
          <div class="text-grey-6 text-body2">Seleccioná la fecha de comienzo y fin del nuevo cuatrimestre</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-date color="cyan" v-model="formData" range />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup color="cyan"/>
          <q-btn flat label="Agregar" v-close-popup color="cyan" @click="add(formData)"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { AGREGAR_CUATRIMESTRE, SELECCIONAR_CUATRIMESTRE } from '../store/cuatrimestre/types'

export default {
  name: 'CuatrimestreLista',
  data () {
    return {
      showModal: false,
      formData: {}
    }
  },
  props: {
    actual: Number,
    listado: Array
  },
  methods: {
    select: function (id) {
      this.$store.dispatch(`cuatrimestre/${SELECCIONAR_CUATRIMESTRE}`, id)
    },
    add: function (data) {
      this.$store.dispatch(`cuatrimestre/${AGREGAR_CUATRIMESTRE}`, data)
      this.formData = {}
    },
    cancel: function () {
      this.formData = {}
    }
  }
}
</script>

<style scoped>
  .border-color-cyan {
    border-color: #00bcd4;
  }

</style>
