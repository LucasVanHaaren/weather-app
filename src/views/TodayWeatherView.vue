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
    fetchWeather: function(cityName) {
      // get weather data from openweathermap API
      return api.getTodayWeatherByCityName(cityName)
        .then(data => {
          this.weather = data
        });
      }
  },
  computed: {
    icon_url: function() {
      return `https://openweathermap.org/img/wn/${this.weather.icon_id}@4x.png`
    }
  },
  created() {
    this.fetchWeather(this.$route.params.city);
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchWeather(to.params.city)
      .then(() => {
        next();
      })
      .catch((err) => {
        this.$emit("apierr", err);
        next(from);
      });
  }
}
</script>

<style scoped>
.today-weather {
  height: 100%;
}
</style>