<template>
  <v-card class="mx-auto" max-width="600px" outlined>
    <v-list-item>
      <v-list-item-content>
        <div class="headline mb-3">
          <b>{{ name }}</b>
        </div>
        <v-list-item-title class="overline mb-1">
          {{ description}}
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
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fas fa-wind</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ wind_speed }} m/s
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fas fa-tachometer-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ pressure }} hPa
          </v-list-item-title>
        </v-list-item>
      </v-list-item-content>
      <v-list-item-avatar tile size="200">
        <img :src="icon_url" />
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn width="100%" color="red darken-3" outlined text :to="link">
        See Week Forecast
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'FullDayWeather',
    props: {
      name: String,
      description: String,
      temperature: Number,
      humidity: Number,
      pressure: Number,
      wind_speed: Number,
      icon_url: String,
      link: Object
    }
  }
</script>
