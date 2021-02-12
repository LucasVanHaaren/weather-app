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
    fetchForecast: function(cityName) {
      return api.getWeekForecastByCityName(cityName)
        .then(data => {
          this.forecast = data;
        });
    },
    getIconUrlById: function(icon_id) {
      return `https://openweathermap.org/img/wn/${icon_id}@4x.png`
    },
    getDayNameBydt: function(dt) {
      return dayjs.unix(dt).format("dddd");
    }
  },
  created() {
    this.fetchForecast(this.$route.params.city)
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchForecast(to.params.city)
      .then(() => {
        next();
      })
      .catch(err => {
        this.$emit("apierr", err);
        next(from);
      });
  }
}
</script>
