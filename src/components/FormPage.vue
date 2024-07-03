<template>
  <div class="container">
    <b-row>
      <b-col class="text-center">
        <!-- Logo -->
        <b-img
            src="https://vuejs.org/images/logo.png"
            fluid
            width="100"
            alt="DIETEC SDR"
        ></b-img>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit">
          <b-row no-gutters>
            <b-col class="px-3">
              <b-form-group
                  id="input-group-1"
                  label="Nombre:"
                  label-for="fullName"
              >
                <b-form-input
                    id="fullName"
                    v-model="fullName"
                    type="text"
                    required
                    placeholder="Ingrese su nombre"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col class="px-3">
              <b-form-group
                  id="input-group-2"
                  label="Ocupación:"
                  label-for="occupation"
              >
                <b-form-input
                    id="occupation"
                    v-model="occupation"
                    type="text"
                    required
                    placeholder="Ingrese su ocupación"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-3"
                  label="Estado:"
                  label-for="state"
              >
                <b-form-select
                    id="state"
                    v-model="state"
                    :options="states"
                    required
                >
                  <template #first>
                    <b-form-select-option :value="null" disabled>-- Seleccione el estado en el que vive --
                    </b-form-select-option>
                  </template>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-4"
                  label="Ciudad:"
                  label-for="city"
              >
                <b-form-input
                    id="city"
                    type="text"
                    required
                    placeholder="Ingrese su ciudad"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-5"
                  label="Sexo de nacimiento:"
                  label-for="gender"
              >
                <b-form-radio-group
                  id="radio-group-1"
                  v-model="sex"
                  :options="genders"
                  required
                >
                </b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-6"
                  label="¿Practicas ejercicio?"
                  label-for="exercise"
              >
                <b-form-checkbox
                    id="exercise"
                    v-model="exercise"
                    required
                >
                  Sí
                </b-form-checkbox>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col cols="12"class="px-3">
              <b-form-group
                  id="input-group-7"
                  label="Fecha de nacimiento:"
                  label-for="birthDate"
              >
                <b-form-input
                    id="birthDate"
                    type="date"
                    required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormPage",
  data() {
    return {
      fullName: "" as string,
      occupation: "" as string,
      state: "" as string,
      sex: "" as string,
      states: [
        {value: "Aguascalientes", text: "Aguascalientes"},
        {value: "Baja California", text: "Baja California"},
        {value: "Baja California Sur", text: "Baja California Sur"},
        {value: "Campeche", text: "Campeche"},
        {value: "Chiapas", text: "Chiapas"},
        {value: "Chihuahua", text: "Chihuahua"},
        {value: "Ciudad de México", text: "Ciudad de México"},
        {value: "Coahuila", text: "Coahuila"},
        {value: "Colima", text: "Colima"},
        {value: "Durango", text: "Durango"},
        {value: "Guanajuato", text: "Guanajuato"},
        {value: "Guerrero", text: "Guerrero"},
        {value: "Hidalgo", text: "Hidalgo"},
        {value: "Jalisco", text: "Jalisco"},
        {value: "México", text: "México"},
        {value: "Michoacán", text: "Michoacán"},
        {value: "Morelos", text: "Morelos"},
        {value: "Nayarit", text: "Nayarit"},
        {value: "Nuevo León", text: "Nuevo León"},
        {value: "Oaxaca", text: "Oaxaca"},
        {value: "Puebla", text: "Puebla"},
        {value: "Querétaro", text: "Querétaro"},
        {value: "Quintana Roo", text: "Quintana Roo"},
        {value: "San Luis Potosí", text: "San Luis Potosí"},
        {value: "Sinaloa", text: "Sinaloa"},
        {value: "Sonora", text: "Sonora"},
        {value: "Tabasco", text: "Tabasco"},
        {value: "Tamaulipas", text: "Tamaulipas"},
        {value: "Tlaxcala", text: "Tlaxcala"},
        {value: "Veracruz", text: "Veracruz"},
        {value: "Yucatán", text: "Yucatán"},
        {value: "Zacatecas", text: "Zacatecas"},
      ] as { value: string; text: string }[],
      genders: [
        {value: "Masculino", text: "Masculino"},
        {value: "Femenino", text: "Femenino"},
      ],
      exercise: false as boolean,
    };
  },
  methods: {
    onSubmit() {
      console.log("Form submitted");
    },
  },
})
</script>

<style scoped>

</style>