import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: 10000,
    params: {
        appid: process.env.VUE_APP_OPENWEATHERMAP_KEY
    }
});

export default {
    getTodayWeatherByCityName: (cityName) => {
        return api.get("/weather", { params: { q: cityName, units: "metric" }})
            .then(payload => {
                let data = payload.data;
                return {
                    weather: {
                        description: data.weather[0].main,
                        icon_id: data.weather[0].icon,
                        wind: data.wind.speed,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                    },
                    temperature: {
                        current: data.main.temp,
                        min: data.main.temp_min,
                        max: data.main.temp_max
                    }
                }
            });
    },
    getWeekForecastByCityName: (cityName) => {
        return api.get("/forecast/daily", { params: { q: cityName, cnt: 6 }})
            .then(payload => {
                return payload.data;
            })
            .catch(err => {
                throw err;
            });   
    }
};