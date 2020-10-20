<template>
  <q-item class="no-padding">
    <q-item-section side>
      <q-icon :name="icon" class="text-cyan" style="font-size: 2em;" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-body1">{{value}}</q-item-label>
      <q-item-label class="text-uppercase text-caption text-body1 text-weight-light" caption>{{title}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'MateriaData',
  props: {
    icon: String,
    title: String,
    value: String
  }
}
</script>

<style scoped>

</style>
