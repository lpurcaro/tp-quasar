<template>
  <div class="row q-col-gutter-md">
    <div class="col-sm-12 col-md-4" v-for="materia in materias" :key="materia.id">
      <MateriaCard v-bind:materia="materia"/>
    </div>
    <div class="col-sm-12 col-md-4 q-chip--clickable" >
      <q-card bordered class="my-card shadow-0 border text-center">
        <q-card-section>
          <q-icon name="add" class="text-grey-6" style="font-size: 4.4em;" />
          <span class="text-grey-6 text-uppercase text-body2 text-bold block">Agregar Materia</span>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import MateriaCard from './MateriaCard'

export default {
  name: 'MateriaLista',
  components: { MateriaCard },
  props: {
    materias: Array
  }
}
</script>

<style scoped>

</style>
