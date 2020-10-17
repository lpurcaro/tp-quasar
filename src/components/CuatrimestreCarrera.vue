<template>
  <q-card bordered class="my-card shadow-0 border">
    <q-card-section>
      <div class="text-h6 text-orange text-uppercase">Cuatrimestre {{nro}}</div>
    </q-card-section>

    <q-separator dark />
    <q-card-section>
        <q-list bordered separator >
          <q-item v-ripple v-for="materia in materias" v-bind:key="materia.id">
            <q-item-section>{{materia.nombre}}</q-item-section>
            <q-item-section side>{{materia.cargaHoraria}}</q-item-section>
          </q-item>
        </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CuatrimestreCarrera',
  props: {
    nro: Number,
    materias: Object
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .my-card {
    margin-bottom: 25px;
    border-color: orange;
    color: grey;
  }
</style>
