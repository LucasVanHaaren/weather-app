import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: { name: 'TodayWeatherDefault' }
  },
  {
    path: '/today-weather',
    name: 'TodayWeatherDefault',
    redirect: { name: 'TodayWeather', params: { city: 'paris' } }
  },
  {
    path: '/today-weather/:city',
    name: 'TodayWeather',
    component: () => import(/* webpackChunkName: "todayweather" */ '../views/TodayWeatherView.vue')
  },
  {
    path: '/week-weather/:city',
    name: 'WeekWeather',
    component: () => import(/* webpackChunkName: "weekweather" */ '../views/WeekWeatherView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsView.vue')
  },
  {
    path: '*',
    redirect: { name : 'root' }
  }
];

const router = new VueRouter({
  routes
});

export default router;
