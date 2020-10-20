<template>
  <q-card bordered class="my-card shadow-0 border">
    <q-card-section>
      <div class="text-body2 text-bold text-cyan text-uppercase">{{materia.nombre}}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
     <MateriaData v-bind:value="materia.docente.nombre" title="Docente" icon="person"/>
     <MateriaData v-bind:value="materia.docente.email" title="Email" icon="email"/>
     <MateriaData v-bind:value="materia.horario.dia" title="Dia de cursada" icon="event_available"/>
     <MateriaData v-bind:value="materia.horario.horario" title="Horario" icon="query_builder"/>
    </q-card-section>
  </q-card>
</template>

<script>
import MateriaData from './MateriaData'
export default {
  name: 'MateriaCard',
  components: { MateriaData },
  props: {
    materia: Object
  }
}
</script>

<style scoped>

</style>
