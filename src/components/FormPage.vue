<template>
  <div class="container">
    <!-- Logo -->
    <b-row>
      <b-col class="text-center">
        <img
            src="../assets/logo.png"
            width="327"
            alt="DIETEC SDR"
        />
      </b-col>
    </b-row>

    <!-- Instructions -->
    <b-row>
      <b-col class="text-center">
        <h1 class="display-4 text-primary">Formulario de registro</h1>
        <p class="lead">Por favor, llene los siguientes campos para completar su perfil</p>
      </b-col>
    </b-row>

    <!-- Form -->
    <b-row>
      <b-col>
        <b-form @submit="onSubmit">
          <!-- Personal data -->
          <b-row no-gutters>
            <b-col class="px-3">
              <b-form-group
                  id="input-group-1"
                  label="Nombre completo:"
                  label-for="fullName"
              >
                <b-form-input
                    id="fullName"
                    v-model="fullName"
                    type="text"
                    required
                    trim
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
                    trim
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
                    :options="statesOptions"
                    required
                >
                  <template #first>
                    <b-form-select-option :value="null" disabled>Seleccione el estado en el que vive
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
                    trim
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
                    :options="gendersOptions"
                    required
                >
                </b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-6"
                  label="¿Practica ejercicio?"
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
            <b-col cols="12">
              <b-form-group
                  id="input-group-7"
                  label="Fecha de nacimiento:"
                  label-class="px-3"
                  label-for="birthDate"
              >
                <b-row no-gutters>
                  <b-col cols="12" md="4" class="px-3 py-1">
                    <b-form-select
                        id="birthYear"
                        v-model="birthYear"
                        :options="yearOptions"
                        required
                        @change="daysInMonth(parseInt(birthMonth), parseInt(birthYear))"
                    >
                      <template #first>
                        <b-form-select-option :value="null" disabled>Año
                        </b-form-select-option>
                      </template>
                    </b-form-select>
                  </b-col>
                  <b-col cols="12" md="4" class="px-3 py-1">
                    <b-form-select
                        id="birthMonth"
                        v-model="birthMonth"
                        :options="monthOptions"
                        required
                        @change="daysInMonth(parseInt(birthMonth), parseInt(birthYear))"
                    >
                      <template #first>
                        <b-form-select-option :value="null" disabled>Mes
                        </b-form-select-option>
                      </template>
                    </b-form-select>
                  </b-col>
                  <b-col cols="12" md="4" class="px-3 py-1">
                    <b-form-select
                        id="birthDay"
                        v-model="birthDay"
                        :options="dayOptions"
                        required
                        :disabled="!birthMonth || !birthYear"
                    >
                      <template #first>
                        <b-form-select-option :value="null" disabled>Día
                        </b-form-select-option>
                      </template>
                    </b-form-select>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-col>
          </b-row>

          <hr class="bg-primary"/>

          <!-- Anthropometric data -->
          <b-row no-gutters>
            <b-col cols="12" md="4" class="px-3">
              <b-form-group
                  id="input-group-8"
                  label="Estatura actual en centímetros (sin zapatos, con los talones pegados a la pared y viendo al frente):"
                  label-for="height"
                  invalid-feedback="Por favor, ingrese su estatura en centímetros."
              >
                <b-input-group
                    append="cm"
                >
                  <b-form-input
                      id="height"
                      type="number"
                      required
                      v-model="height"
                      trim
                      placeholder="Ingrese su estatura"
                      autocomplete="off"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="4" class="px-3">
              <b-form-group
                  id="input-group-9"
                  label="Circunferencia de la muñeca derecha en centímetros (utiliza una cinta métrica sin apretar la muñeca):"
                  label-for="wristCircumference"
              >
                <b-input-group
                    append="cm"
                >
                  <b-form-input
                      id="wristCircumference"
                      type="number"
                      required
                      v-model="wristCircumference"
                      trim
                      placeholder="Ingrese la circunferencia (muñeca)"
                      autocomplete="off"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="4" class="px-3">
              <b-form-group
                  id="input-group-10"
                  label="Circunferencia de la cintura en centímetros (utiliza una cinta métrica a nivel del ombligo sin oprimir la piel):"
                  label-for="waistCircumference"
              >
                <b-input-group
                    append="cm"
                >
                  <b-form-input
                      id="waistCircumference"
                      type="number"
                      required
                      v-model="waistCircumference"
                      trim
                      placeholder="Ingrese la circunferencia (cintura)"
                      autocomplete="off"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-11"
                  label="Peso corporal actual en kilogramos (pésate en ayunas y envía la fotografía de tu peso sobre la báscula digital):"
                  label-for="weight"
              >
                <b-input-group
                    append="kg"
                >
                  <b-form-input
                      id="weight"
                      type="number"
                      required
                      v-model="weight"
                      trim
                      placeholder="Ingrese su peso actual"
                      autocomplete="off"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-12"
                  label="Peso corporal deseado en kilogramos (díganos cuál es el peso con el que se sentiría feliz):"
                  label-for="desiredWeight"
              >
                <b-input-group
                    append="kg"
                >
                  <b-form-input
                      id="desiredWeight"
                      type="number"
                      required
                      trim
                      placeholder="Ingrese su peso deseado"
                      autocomplete="off"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>

          <hr class="bg-primary"/>

          <!-- Meal preferences and other data -->
          <b-row no-gutters>
            <b-col class="px-3">
              <b-form-group
                  id="input-group-13"
                  label="Elija en qué momento del día prefieres comer más, siendo 1 el principal momento de alimentación:"
                  label-for="mealPreferences"
              >
                <draggable v-model="mealPreferences" :options="{ animation: 300 }">
                  <transition-group tag="div" name="list">
                    <b-list-group-item
                        v-for="(meal, index) in mealPreferences"
                        :key="meal"
                        class="d-flex justify-content-between align-items-center rounded border-primary"
                    >
                      {{ index + 1 }}. {{ meal }}
                      <b-icon icon="arrows-move" class="ml-3"></b-icon>
                    </b-list-group-item>
                  </transition-group>
                </draggable>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-14"
                  label="Indique en qué momento del día desea comer un snack para satisfacer su antojo o apetito entre comidas:"
                  label-for="snackPreferences"
              >
                <b-form-checkbox-group
                    id="snackPreferences"
                    v-model="snackPreferences"
                    :options="snackTimeOptions"
                    required
                >
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6" class="px-3">
              <b-form-group
                  id="input-group-15"
                  label="Cuéntenos cuáles son sus bebidas acostumbradas o preferidas durante el día:"
                  label-for="beverages"
              >
                <b-form-textarea
                    id="beverages"
                    v-model="beverages"
                    required
                    trim
                    no-resize
                    rows="2"
                    placeholder="Ejemplo: agua natural, café, té, refresco, jugo, etc."
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col class="px-3">
              <b-form-group
                  id="input-group-16"
                  label="Finalmente, relate si presenta alguna enfermedad, padecimiento, o dolor físico y cuál es:"
                  label-for="diseases"
              >
                <b-form-textarea
                    id="diseases"
                    v-model="diseases"
                    required
                    trim
                    no-resize
                    rows="3"
                    placeholder="Ejemplo: diabetes, hipertensión, colesterol alto, dolor de cabeza, etc."
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>

          <hr class="bg-primary"/>

          <!-- Submit button -->
          <b-row no-gutters>
            <b-col cols="12" class="px-3">
              <p class="text-justify">
                  <b-icon icon="exclamation-triangle" class="text-warning"></b-icon>
                <b> Aviso:</b> Al terminar de rellenar el formulario, presione el botón <i>"Descargar formulario"</i> para obtener un archivo PDF con la información proporcionada. Posteriormente, envíe el archivo a su dietista vía WhatsApp.
              </p>
            </b-col>
            <b-col cols="12" class="px-3">
              <b-button block type="submit" variant="primary">Descargar formulario</b-button>
            </b-col>
          </b-row>

          <hr class="bg-primary"/>

          <!-- Disclaimer -->
          <b-row no-gutters>
            <b-col class="px-3">
              <p class="text-justify">
                <small>
                  Gracias por tu preferencia. Te invitamos a conocer nuestros Términos y Condiciones, así como nuestra lista de precios en nuestra página web: <a href="https://www.dietec.mx" target="_blank">www.dietec.mx</a>. Si tienes alguna duda o aclaración únicamente para servicio al cliente, comunícate en WhatsApp al número: <b>55 4853 2458</b>.
                </small>
              </p>
            </b-col>
          </b-row>

        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import draggable from "vuedraggable";

export default Vue.extend({
  name: "FormPage",
  components: {
    draggable,
  },
  data() {
    return {
      // Form fields
      fullName: "" as string,
      occupation: "" as string,
      state: null as string | null,
      sex: "" as string,
      exercise: false as boolean,
      birthYear: null as string | null,
      birthMonth: null as string | null,
      birthDay: null as string | null,
      height: null as Number | null,
      wristCircumference: null as Number | null,
      waistCircumference: null as Number | null,
      weight: null as Number | null,
      desiredWeight: null as Number | null,
      mealPreferences: ['Desayuno', 'Comida', 'Cena'] as string[],
      snackPreferences: [] as string[],
      beverages: "" as string,
      diseases: "" as string,

      // Form options
      yearOptions: [] as { value: string; text: string }[],
      monthOptions: [
        {value: 0, text: "Enero"},
        {value: 1, text: "Febrero"},
        {value: 2, text: "Marzo"},
        {value: 3, text: "Abril"},
        {value: 4, text: "Mayo"},
        {value: 5, text: "Junio"},
        {value: 6, text: "Julio"},
        {value: 7, text: "Agosto"},
        {value: 8, text: "Septiembre"},
        {value: 9, text: "Octubre"},
        {value: 10, text: "Noviembre"},
        {value: 11, text: "Diciembre"},
      ] as { value: number; text: string }[],
      dayOptions: [] as { value: string; text: string }[],
      statesOptions: [
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
      gendersOptions: [
        {value: "Masculino", text: "Masculino"},
        {value: "Femenino", text: "Femenino"},
      ],
      snackTimeOptions: [
        {value: "A media mañana", text: "A media mañana"},
        {value: "A media tarde", text: "A media tarde"},
      ],

    };
  },

  methods: {
    onSubmit() {
      console.log("Form submitted");
    },

    // Generate years from current year to 120 years ago
    generateYears() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = currentYear; i >= currentYear - 120; i--) {
        years.push({value: i.toString(), text: i.toString()});
      }
      this.yearOptions = years;
    },

    // Generate days based on selected month and year
    daysInMonth(month: number, year: number) {
      const days = [];
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({value: i.toString(), text: i.toString()});
      }
      console.log(days);
      this.dayOptions = days;
    },
  },

  mounted() {
    this.generateYears();
  }
})
</script>

<style scoped>
.list-group-item {
  cursor: grab;
}
</style>