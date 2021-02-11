<template>
  <FullDayWeather
    v-if="weather"
    :name="weather.name"
    :description="weather.description" 
    :temperature="weather.temperature.current"
    :humidity="weather.humidity"
    :wind_speed="weather.wind_speed"
    :icon_url="icon_url"
    :link="{ name: 'WeekWeather', params: { city: this.$route.params.city } }" />
</template>

<script>
import api from "@/service/openweathermap";
import FullDayWeather from "@/components/FullDayWeather";

export default {
  name: 'TodayWeatherView',
  components: {
    FullDayWeather
  },
  data: () => ({
    weather: null
  }),
  methods: {
    fetchWeather: function() {
      // get weather data from openweathermap API
      api.getTodayWeatherByCityName(this.$route.params.city)
        .then(data => {
          this.weather = data
        })
        .catch(err => {
          console.log(err);
        });
      }
  },
  computed: {
    icon_url: function() {
      return `https://openweathermap.org/img/wn/${this.weather.icon_id}@4x.png`
    }
  },
  mounted() {
    this.fetchWeather();
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchWeather();
    next();
  }
}
</script>

<style scoped>
.today-weather {
  height: 100%;
}
</style>