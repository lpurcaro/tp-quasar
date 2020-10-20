<template>
  <q-form
    class="q-gutter-md"
    @submit="agregar"
    @reset="reset"
  >
    <q-input color="grey" v-model="model.nombre" label="Asignatura" :rules="rules.requerido">
      <template v-slot:prepend>
        <q-icon name="bookmark_border" color="cyan"/>
      </template>
    </q-input>
    <q-input color="grey" v-model="model.docente" label="Docente" :rules="rules.requerido">
      <template v-slot:prepend>
        <q-icon name="person_outline" color="cyan"/>
      </template>
    </q-input>
    <q-input type="email" color="grey" v-model="model.email" label="Email" :rules="rules.email">
      <template v-slot:prepend>
        <q-icon name="mail_outline" color="cyan"/>
      </template>
    </q-input>
    <q-select color="grey" v-model="model.dia" :options="dias" label="Dia" :rules="rules.requerido">
      <template v-slot:prepend>
        <q-icon name="event_available" color="cyan"/>
      </template>
    </q-select>
    <q-select color="grey" v-model="model.horario" :options="horarios" label="Horario" :rules="rules.requerido">
      <template v-slot:prepend>
        <q-icon name="query_builder" color="cyan"/>
      </template>
    </q-select>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancelar" type="reset" v-close-popup color="cyan"/>
      <q-btn flat label="Agregar" type="submit" color="cyan"/>
    </q-card-actions>
  </q-form>
</template>

<script>
export default {
  name: 'MateriaFormulario',
  props: {
    model: Object,
    reset: Function,
    agregar: Function
  },
  data () {
    return {
      dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves'],
      horarios: ['19:00', '19:40', '20:20', '21:00', '21:40', '22:20'],
      rules: {
        requerido: [
          val => (val !== null && val !== '') || 'Campo requerido'
        ],
        email: [
          val => (val !== null && val !== '') || 'Campo requerido',
          val => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val) || 'Tiene que ser un email'
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
