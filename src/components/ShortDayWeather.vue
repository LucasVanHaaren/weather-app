<template>
  <v-card class="mx-auto" max-width="400px" outlined >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          <b>{{ name }}</b>
        </v-list-item-title>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fas fa-thermometer-quarter</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ temperature }} °C
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fas fa-tint</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ humidity }} %
          </v-list-item-title>
        </v-list-item>
      </v-list-item-content>
      <v-list-item-avatar tile size="100">
        <img :src="icon_url" />
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {
    name: 'ShortDayWeather',
    props: {
      name: String,
      temperature: Number,
      humidity: Number,
      icon_url: String,
    }
  }
</script>
