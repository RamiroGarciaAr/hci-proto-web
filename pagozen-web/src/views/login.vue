<template>
    <v-container class="fill-height">
      <v-row class="d-flex justify-center align-center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="text-h6">
              Iniciar Sesión
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Correo Electrónico"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  label="Contraseña"
                  type="password"
                  v-model="password"
                ></v-text-field>
                <v-btn @click="login">
                  Iniciar Sesión
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Lógica para manejar el inicio de sesión
        console.log(`Email: ${this.email}, Password: ${this.password}`);
      }
    }
  };
  </script>
  
  <style>
  /* Estilos personalizados */
  </style>
  