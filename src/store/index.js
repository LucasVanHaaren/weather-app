import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Units = ["metric", "imperial"];

export default new Vuex.Store({
  state: {
    unit: "metric",
    default_city: "Paris"
  },
  getters: {
    unit: (state) => {
      return state.unit;
    },
    default_city: (state) => {
      return state.default_city;
    }
  },
  mutations: {
    SET_UNIT: (state, unit) => {
      state.unit = unit;
    },
    SET_DEFAULT_CITY: (state, cityName) => {
      state.default_city = cityName;
    }
  },
  actions: {
    setUnit: (store, unit) => {
      if(Units.includes(unit) && unit !== store.state.unit) {
        store.commit("SET_UNIT", unit);
      }
    },
    setDefaultCity: (store, cityName) => {
      store.commit("SET_DEFAULT_CITY", cityName);
    }
  }
});
