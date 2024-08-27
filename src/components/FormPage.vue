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
        <b-form @submit.prevent="onSubmit">
          <!-- Personal data -->
          <b-card>
            <b-row no-gutters>
              <b-col class="px-3 my-2">
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
                      maxlength="50"
                      minlength="3"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row no-gutters>
              <b-col class="px-3 my-2">
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
                      maxlength="50"
                      minlength="3"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row no-gutters>
              <b-col cols="12" md="6" class="px-3 my-2">
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
              <b-col cols="12" md="6" class="px-3 my-2">
                <b-form-group
                    id="input-group-4"
                    label="Ciudad:"
                    label-for="city"
                >
                  <b-form-input
                      id="city"
                      type="text"
                      required
                      v-model="city"
                      trim
                      placeholder="Ingrese su ciudad"
                      maxlength="50"
                      minlength="2"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col v-if="state === 'other'" cols="12" md="6" class="px-3 my-2">
                <b-form-group
                    id="input-group-99"
                    label="Escriba el país y estado/provincia de donde proviene:"
                    label-for="otherState"
                >
                  <b-form-input
                      id="otherState"
                      type="text"
                      required
                      v-model="otherState"
                      trim
                      placeholder="Ejemplo: Estados Unidos, California"
                      maxlength="50"
                      minlength="2"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row no-gutters>
              <b-col cols="12" md="6" class="px-3 my-2">
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
              <b-col cols="12" md="6" class="px-3 my-2">
                <b-form-group
                    id="input-group-6"
                    label="¿Practica ejercicio?"
                    label-for="exercise"
                >
                  <b-form-radio-group
                      id="radio-group-2"
                      v-model="exercise"
                      :options="[{text: 'Sí', value: 'Sí'}, {text: 'No', value: 'No'}]"
                      required
                  >
                  </b-form-radio-group>
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
                          @change="daysInMonth(birthMonth, birthYear)"
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
                          @change="daysInMonth(birthMonth, birthYear)"
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
                          :disabled="birthMonth === null || !birthYear"
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
            <b-row no-gutters>
              <b-col cols="12" md="6" class="px-3 my-2">
                <b-form-group
                    id="input-group-8"
                    label="Ingrese su número de WhatsApp:"
                    label-for="phoneNumber"
                >
                  <b-input-group>
                    <b-input-group-prepend is-text>
                      <b-icon icon="whatsapp" class="text-primary"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                        id="phoneNumber"
                        type="tel"
                        required
                        v-model="phoneNumber"
                        trim
                        placeholder="Ingrese su número de teléfono"
                        autocomplete="off"
                        maxlength="10"
                        :formatter="formatPhoneNumber"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>

          <hr class="bg-primary"/>

          <!-- Anthropometric data -->
          <b-card>
            <b-row no-gutters>
              <b-col cols="12" md="4" class="px-3 my-2">
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
                        v-model.number="height"
                        trim
                        placeholder="Ejemplo: 178"
                        autocomplete="off"
                        min="0"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="4" class="px-3 my-2">
                <b-form-group
                    id="input-group-9"
                    label="Circunferencia exacta de la muñeca derecha con centímetros y milímetros (utilice una cinta métrica sin apretar la muñeca):"
                    label-for="wristCircumference"
                >
                  <b-input-group
                      append="cm"
                  >
                    <b-form-input
                        id="wristCircumference"
                        type="number"
                        required
                        v-model.number="wristCircumference"
                        trim
                        placeholder="Ejemplo: 17.2"
                        autocomplete="off"
                        min="0"
                        step="0.1"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="4" class="px-3 my-2">
                <b-form-group
                    id="input-group-10"
                    label="Circunferencia exacta de la cintura con centímetros y milímetros (utilice una cinta métrica a nivel del ombligo sin oprimir la piel):"
                    label-for="waistCircumference"
                >
                  <b-input-group
                      append="cm"
                  >
                    <b-form-input
                        id="waistCircumference"
                        type="number"
                        required
                        v-model.number="waistCircumference"
                        trim
                        placeholder="Ejemplo: 102.6"
                        autocomplete="off"
                        min="0"
                        step="0.1"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row no-gutters>
              <b-col cols="12" md="6" class="px-3 my-2">
                <b-form-group
                    id="input-group-11"
                    label="Peso corporal exacto actual con kilogramos y gramos (pésese en ayunas, sin zapatos, y envíe la fotografía de su peso sobre la báscula digital):"
                    label-for="weight"
                >
                  <b-input-group
                      append="kg"
                  >
                    <b-form-input
                        id="weight"
                        type="number"
                        required
                        v-model.number="weight"
                        trim
                        placeholder="Ejemplo: 95.7"
                        autocomplete="off"
                        min="0"
                        step="0.1"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6" class="px-3 my-2">
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
                        v-model.number="desiredWeight"
                        placeholder="Ejemplo: 75.5"
                        autocomplete="off"
                        min="0"
                        step="0.1"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>

          <hr class="bg-primary"/>

          <!-- Meal preferences and other data -->
          <b-card>
            <b-row no-gutters>
              <b-col class="px-3 my-2">
                <b-form-group
                    id="input-group-13"
                    label="Arrastre y ordene en qué momento del día prefiere comer más, siendo 1 el principal momento de alimentación:"
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
              <b-col cols="12" md="6" class="px-3 my-2">
                <b-form-group
                    id="input-group-14"
                    label="Indique en qué momento del día desea comer un snack para satisfacer su antojo o apetito entre comidas:"
                    label-for="snackPreferences"
                >
                  <b-form-checkbox-group
                      id="snackPreferences"
                      v-model="snackPreferences"
                      :options="snackTimeOptions"
                  >
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6" class="px-3 my-2">
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
                      rows="3"
                      placeholder="Ejemplo: agua de frutas, leche, refresco, jugo, cerveza, etc."
                      maxlength="85"
                      minlength="2"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row no-gutters>
              <b-col class="px-3 my-2">
                <b-form-group
                    id="input-group-16"
                    label="Relate si presenta alguna enfermedad, padecimiento, o dolor físico y cuál es:"
                    label-for="diseases"
                >
                  <b-form-textarea
                      id="diseases"
                      v-model="diseases"
                      trim
                      no-resize
                      rows="3"
                      placeholder="Ejemplo: diabetes, hipertensión, colesterol alto, dolor de cabeza, etc."
                      maxlength="85"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row no-gutters>
              <b-col class="px-3 my-2">
                <b-form-group
                    id="input-group-17"
                    label="Finalmente, ¿Toma algún medicamento o suplemento alimenticio? Si es así, mencione cuál y para qué:"
                    label-for="medicines"
                >
                  <b-form-textarea
                      id="medicines"
                      v-model="medicines"
                      trim
                      no-resize
                      rows="3"
                      placeholder="Ejemplo: metformina, complejo B, vitamina C, etc."
                      maxlength="85"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>

          <hr class="bg-primary"/>

          <!-- Submit button -->
          <b-card>
            <b-row no-gutters>
              <b-col cols="12" class="px-3 my-2">
                <p class="text-justify">
                  <b-icon icon="exclamation-triangle" class="text-warning"></b-icon>
                  <small>
                    <b> Aviso:</b> Al terminar de rellenar el formulario, presione el botón <i>"Descargar
                    formulario"</i>
                    para obtener un archivo PDF con la información proporcionada. Posteriormente, envíe el archivo a su
                    dietista vía WhatsApp.
                  </small>
                </p>
              </b-col>
              <b-col cols="12" class="px-3">
                <b-button block type="submit" variant="primary">Descargar formulario</b-button>
              </b-col>
            </b-row>
          </b-card>

          <hr class="bg-primary"/>

          <!-- Disclaimer -->
          <b-row no-gutters>
            <b-col class="px-3 my-2">
              <p class="text-justify">
                <small>
                  Gracias por tu preferencia. Te invitamos a conocer nuestros Términos y Condiciones, así como nuestra
                  lista de precios en nuestra página web: <a href="https://www.dietec.mx"
                                                             target="_blank">www.dietec.mx</a>. Si tienes alguna duda o
                  aclaración únicamente para servicio al cliente, comunícate en WhatsApp al número: <b>55 4853 2458</b>.
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
import * as jspdf from "jspdf";

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
      city: "" as string,
      otherState: "" as string,
      sex: "" as string,
      exercise: "" as string,
      birthYear: null as string | null,
      birthMonth: null as string | null,
      birthDay: null as string | null,
      phoneNumber: "" as string,
      height: null as Number | null,
      wristCircumference: null as Number | null,
      waistCircumference: null as Number | null,
      weight: null as Number | null,
      desiredWeight: null as Number | null,
      mealPreferences: ['Desayuno', 'Comida', 'Cena'] as string[],
      snackPreferences: [] as string[],
      beverages: "" as string,
      diseases: "" as string,
      medicines: "" as string,

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
        {value: "other", text: "Otro / Extranjero"},
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
    // Submit form
    onSubmit() {
      this.generatePDF();
      this.showDownloadConfirmation()
    },

    // Get first name from full name
    getFirstName() {
      return this.fullName.split(" ")[0];
    },

    // Get full birthdate in format "DD de Month de YYYY"
    getFullBirthDate() {
      const monthName = this.changeMonthNumberToName(Number(this.birthMonth));
      return `${this.birthDay} de ${monthName} de ${this.birthYear}`;
    },

    // Change month number to month name
    changeMonthNumberToName(monthNumber: number) {
      return this.monthOptions[monthNumber].text;
    },

    // Formats the name to be used as the file name with no special characters and spaces replaced by _
    formatNameForFile() {
      // Change accent marks to normal characters
      let formattedName = this.fullName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      // replace spaces with _ and remove special characters
      formattedName = formattedName.replace(/ /g, "_").replace(/[^a-zA-Z0-9_]/g, "");
      return formattedName;
    },

    // Formats phone number to only contain digits
    formatPhoneNumber(value: string): string {
      let digits = value.replace(/\D/g, '');
      if (digits.length > 10) {
        digits = digits.substring(0, 10);
      }
      return digits;
    },

    // Show download confirmation message
    showDownloadConfirmation() {
      this.$swal({
        toast: true,
        position: "top-end",
        title: "¡Listo!",
        text: `¡Gracias, ${this.getFirstName()}! Su formulario ha sido descargado con éxito, ahora solo envíelo a su dietista vía WhatsApp.`,
        icon: "success",
        iconColor: "#ff6600",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        background: "#fff9f3",
      });
    },

    // Generate PDF with form data
    generatePDF() {
      const doc = new jspdf.jsPDF();
      doc.setFontSize(20);
      doc.setTextColor("#ff6600");
      doc.text("Formulario de registro", 105, 10, {align: "center"});

      // Personal data
      doc.setFontSize(16);
      doc.text("Datos personales", 10, 20);
      doc.setFontSize(12);
      doc.setTextColor("#000000")
      doc.text(`Nombre completo: ${this.fullName}`, 10, 30);
      doc.text(`Ocupación: ${this.occupation}`, 10, 40);
      doc.text(`Estado: ${this.state === "other" ? this.otherState : this.state}`, 10, 50);
      doc.text(`Ciudad: ${this.city}`, 10, 60);
      doc.text(`Sexo de nacimiento: ${this.sex}`, 10, 70);
      doc.text(`¿Practica ejercicio?: ${this.exercise}`, 10, 80);
      doc.text(`Fecha de nacimiento: ${this.getFullBirthDate()}`, 10, 90);
      doc.text(`Número de teléfono: ${this.phoneNumber}`, 10, 100);

      // Anthropometric data
      doc.setFontSize(16);
      doc.setTextColor("#ff6600");
      doc.text("Datos físicos", 10, 110);
      doc.setFontSize(12);
      doc.setTextColor("#000000")
      doc.text(`Estatura: ${this.height} cm`, 10, 120);
      doc.text(`Circunferencia de la muñeca: ${this.wristCircumference} cm`, 10, 130);
      doc.text(`Circunferencia de la cintura: ${this.waistCircumference} cm`, 10, 140);
      doc.text(`Peso corporal: ${this.weight} kg`, 10, 150);
      doc.text(`Peso deseado: ${this.desiredWeight} kg`, 10, 160);

      // Meal preferences and other data
      doc.setFontSize(16);
      doc.setTextColor("#ff6600");
      doc.text("Preferencias alimenticias y otros datos", 10, 170);
      doc.setFontSize(12);
      doc.setTextColor("#000000")
      doc.text(`Momentos de comida (mayor a menor): ${this.mealPreferences.join(", ")}`, 10, 180);
      doc.text(`Snacks: ${this.snackPreferences.length > 0 ? this.snackPreferences.join(", ") : "N/A"}`, 10, 190);
      doc.text(`Bebidas: ${this.beverages}`, 10, 200);
      doc.text(`Enfermedades: ${this.diseases ? this.diseases : "N/A"}`, 10, 210);
      doc.text(`Medicamentos: ${this.medicines ? this.medicines : "N/A"}`, 10, 220);

      doc.save(`DIETEC_Formulario_${this.formatNameForFile()}.pdf`);
    },

    // Generate years from current year to 120 years ago
    generateYears() {
      const currentYear = new Date().getFullYear() - 15;
      const years = [];
      for (let i = currentYear; i >= currentYear - 120; i--) {
        years.push({value: i.toString(), text: i.toString()});
      }
      this.yearOptions = years;
    },

    // Generate days based on selected month and year
    daysInMonth(month: string | null, year: string | null) {
      const days = [];
      const daysInMonth = new Date(Number(year), Number(month) + 1, 0).getDate();
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({value: i.toString(), text: i.toString()});
      }
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

.card {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 1rem 0 1rem 0;
}
</style>