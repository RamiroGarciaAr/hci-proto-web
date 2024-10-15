<script setup>
    import LogInLogo from '@/components/LogInLogo.vue'; // Ensure the path is correct
    import { ref , onMounted} from 'vue';
    import {Country} from 'country-state-city';

    const nombre = ref('');
    const apellido = ref('');
    const nacionalidad = ref('');
    const nacionalidades = ref([]);
    const aceptaTerminos = ref(false)

    const getCountries = () => {
        const countries = Country.getAllCountries(); 
        nacionalidades.value = countries.map(country => country.name); 
    };

    onMounted(() => {
        getCountries();
    });
    const submitForm = () => {
        if (aceptaTerminos.value && nombre.value != ''  && apellido.value != '' && nacionalidad.value != '') {

            // Handle form submission
            console.log('Form submitted:', { nombre: nombre.value, apellido: apellido.value, nacionalidad: nacionalidad.value })
        }
        else if (nombre.value == '')
        {
            alert('Falta completar tu Nombre')
        }
        else if (apellido.value == '')
        {
            alert('Falta completar tu Apellido')
        }
        else if ( nacionalidad.value == '')
        {
            alert('Falta completar tu Nacionalidad')
        }
        else {
            alert('Debes aceptar los términos y condiciones.')
        }
    }

    const cancelForm = () => {

        nombre.value = ''
        apellido.value = ''
        nacionalidad.value = ''
        aceptaTerminos.value = false
    }
</script>

<template>
  <v-container class="fill-height">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
            <LogInLogo /> 
            
            <!-- Form -->
            <v-card-text>
            <h3 class="text-center">Contanos un poco de vos.</h3>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                label="Nombre"
                v-model="nombre"
                placeholder="Nombre"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="Apellido"
                v-model="apellido"
                placeholder="Apellido"
                outlined
                required
              ></v-text-field>
                <v-select
                label="Nacionalidad"
                v-model="nacionalidad"
                :items="nacionalidades"
                placeholder="Selecciona tu nacionalidad"
                outlined
                required
                ></v-select>

              <!-- Terms and Conditions Checkbox -->
              <v-checkbox
                v-model="aceptaTerminos"
                label="Acepto los Términos y Condiciones de Servicio"
                required
              ></v-checkbox>

              <!-- Buttons -->
              <v-row>
                <v-col cols="6">
                  <v-btn block color="red" @click="cancelForm">Cancelar</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn block color="primary" type="submit">Registrarse</v-btn>
                </v-col>
              </v-row>
            </v-form>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1e3a8a;
  background-image: linear-gradient(135deg, #1e3a8a, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.v-btn {
  font-weight: bold;
}

.v-img {
  border-radius: 50%;
}

</style>  
  