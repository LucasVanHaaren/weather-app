<template>
  <v-app>
    <v-app-bar app color="red darken-3" dark fixed flat dense>
      <v-btn text plain :to="{ name: 'root' }">
        <v-icon>fas fa-cloud</v-icon>
        <span class="ml-1">WeatherApp</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
          color="red lighten-1"
          solo-inverted
          flat
          dense
          hide-details
          clearable
          label="Search"
          prepend-inner-icon="fas fa-search"
          v-model="search"
          @keydown.enter="routeToCityName"
        ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn text plain :to="{ name: 'Settings' }">
        <span class="mr-2 hidden-md-and-down">Settings</span>
        <v-icon>fas fa-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <router-view :key="$route.fullPath" @apierr="handleError">
        </router-view>
        <v-snackbar
          app
          bottom
          multi-line
          right
          color="error"
          v-model="snackbar.isActive"
          :timeout="4000">
        <b>Error {{ snackbar.code }}:</b> {{ snackbar.message }}
        </v-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router"

export default {
  name: 'App',
  data: () => ({
    search: "",
    snackbar: {
      isActive: false,
      code: "",
      message: ""
    }
  }),
  methods: {
    routeToCityName() {
      router.push({name: router.name, params: { city: this.search.toLowerCase() } })
      this.search = ""
    },
    handleError(event) {
      this.snackbar.code = event.cod;
      this.snackbar.message = event.message;
      this.snackbar.isActive = true;
    }
  }
};
</script>
