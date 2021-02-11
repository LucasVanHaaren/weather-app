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
        <router-view :key="$route.fullPath">
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router"

export default {
  name: 'App',
  data: () => ({
    search: ""
  }),
  methods: {
    routeToCityName() {
      router.push({name: router.name, params: { city: this.search.toLowerCase() } })
      this.search = ""
    }
  }
};
</script>
