# weather-app [![Netlify Status](https://api.netlify.com/api/v1/badges/11ec89e1-3e04-4f9b-a5c2-16fdaf2dd354/deploy-status)](https://app.netlify.com/sites/vhash-weather-app/deploys)

> Simple **Vue** weather app, built as a technical test for [360medics](https://github.com/360medics)

## Setup

First, copy `.env.sample` file to `.env` and put your [openweathermap](https://openweathermap.org/) api key (works with free tier).

Then run these commands to install dependencies and build the app.

```bash
npm install
npm run build
```

## App navigation

- `/#/weather/<CITYNAME>/today` shows detailed weather for the day

- `/#/weather/<CITYNAME>/week` shows weather forecast for the week

- `/#/settings` shows application settings (**Under development**)
