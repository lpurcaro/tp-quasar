<template>
  <q-card bordered class="my-card shadow-0 border">
    <q-card-section>
      <div class="text-h6 text-orange text-uppercase">titulo</div>
    </q-card-section>

    <q-separator dark />
    <q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'MateriaCard',
  props: {
    materia: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
