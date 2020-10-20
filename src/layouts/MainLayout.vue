<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: mediumpurple">
        <q-toolbar-title>
          Seguimiento Académico
        </q-toolbar-title>

        <div>Seguimiento Académico v0.01</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-tabs
        v-model="tab"
        class="bg-grey-1 nav-bar"
        dense
        align="justify"
      >
        <q-route-tab to="/" class="text-green" name="info" icon="info" label="Info" />
        <q-route-tab to="carrera" class="text-orange" name="carrera" icon="school" label="Carrera" />
        <q-route-tab to="cuatrimestres" class="text-cyan" name="cuatrimestres" icon="alarm" label="Cuatrimestres" />
        <q-route-tab to="notas" class="text-red" name="notas" icon="grade" label="Notas" />
      </q-tabs>
      <div class="page-container">
        <router-view />
      </div>

    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: { },
  data () {
    return {
      tab: 'info'
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    margin-bottom: 75px;
  }

  .page-container {
    margin: 0 25px;
  }
</style>
