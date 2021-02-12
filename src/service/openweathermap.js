import axios from "axios";
import store from "@/store/";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/',
    timeout: 10000,
    params: {
        appid: process.env.VUE_APP_OPENWEATHERMAP_KEY
    }
});

function getCoordinatesByCityName(cityName) {
    return api.get("/geo/1.0/direct", { params: { q: cityName, limit: 1 }})
        .then(payload => {
            if(!payload.data[0]) throw { cod: 404, message: "City not found"}
            return {
                lat: payload.data[0].lat,
                lon: payload.data[0].lon
            };
        });
}

export default {
    getTodayWeatherByCityName: (cityName) => {
        return api.get("/data/2.5/weather", { params: { q: cityName, units: store.getters["unit"] }})
            .then(payload => {
                let data = payload.data;
                return {
                    name: data.name,
                    description: data.weather[0].main,
                    icon_id: data.weather[0].icon,
                    wind_speed: data.wind.speed,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    temperature: {
                        current: data.main.temp,
                        min: data.main.temp_min,
                        max: data.main.temp_max
                    }
                }
            })
            .catch(err => {
                throw err.response.data;
            });
    },
    getWeekForecastByCityName: (cityName) => {
        return getCoordinatesByCityName(cityName)
            .then(coordinates => {
                return api.get("/data/2.5/onecall", { params: { lat: coordinates.lat, lon: coordinates.lon, exclude: "current,minutely,hourly,alerts", units: store.getters["unit"] }})
                    .then(payload => {
                        return payload.data.daily.slice(1,7);
                    })
                    .catch(err => {
                        throw err.response.data;
                    });
            });
    }
};