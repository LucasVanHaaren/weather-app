<template>
  <v-row class="mx-auto">
    <v-col :md="4" :sm="12" v-for="day in forecast" :key="day.dt">
      <ShortDayWeather :name="getDayNameBydt(day.dt)" :temperature="day.temp.day" :humidity="day.humidity" :icon_url="getIconUrlById(day.weather[0].icon)" />
    </v-col>
    <v-col cols="12">
      <v-btn width="100%" color="red darken-3" outlined text :to="{ name: 'TodayWeather', params: { city: this.$route.params.city } }" >See Today Weather</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import dayjs from "dayjs";

import api from "@/service/openweathermap";
import ShortDayWeather from "@/components/ShortDayWeather";

export default {
  name: 'WeekWeatherView',
  components: {
    ShortDayWeather
  },
  data: () => ({
    forecast: null
  }),
  methods: {
    fetchForecast: function() {
      api.getWeekForecastByCityName(this.$route.params.city)
        .then(data => {
          this.forecast = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getIconUrlById: function(icon_id) {
      return `https://openweathermap.org/img/wn/${icon_id}@4x.png`
    },
    getDayNameBydt: function(dt) {
      return dayjs.unix(dt).format("dddd");
    }
  },
  mounted() {
    this.fetchForecast()
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchForecast();
    next();
  }
}
</script>
