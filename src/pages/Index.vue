<template>
  <div class="q-px-lg q-pb-md">
    <div class="text-green text-uppercase text-h4">
      Qué podes hacer con esta app
    </div>
    <q-timeline color="green">
      <q-timeline-entry icon="check">
        <template v-slot:subtitle>
          Octube 10, 2020
        </template>
        <template v-slot:title>
          Consultar las materias de la carrera
        </template>
        <div>
          Podés checkear qué materias vas a cursar en cada cuatrimestre
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="check">
        <template v-slot:subtitle>
          Octube 15, 2020
        </template>
        <template v-slot:title>
          Agregar  cuatrimestres
        </template>

        <div>
          Podés cargar cuatrimestres, con la fecha de inicio y fin, editarlos y eliminarlos
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="check">
        <template v-slot:subtitle>
          Octube 25, 2020
        </template>
        <template v-slot:title>
          Agregar  Materias
        </template>

        <div>
          Podés cargar las materias que quieras cursar por cuatrimestre, con el horario y los datos del profesor para tener a mano en caso de que necesites
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="last_page">
        <template v-slot:subtitle>
          PROXIMAMENTE...
        </template>
        <template v-slot:title>
          Cargar notas
        </template>

        <div>
          Proximamente vas a poder cargar las notas que vayas sacando en el cuatrimestre y ver el promedio y las promociones que tengas
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>

export default {
  name: 'PageIndex',
  comments: { }
}
</script>
