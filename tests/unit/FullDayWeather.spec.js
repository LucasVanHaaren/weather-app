import { shallowMount } from '@vue/test-utils'
import FullDayWeather from "@/components/FullDayWeather.vue"

describe('FullDayWeather.vue', () => {
  it('match snapshot', () => {
    const wrapper = shallowMount(FullDayWeather, {
      propsData: {
        name: "Paris",
        description: "Cloudy",
        temperature: 22,
        humidity: 55,
        wind_speed: 54,
        icon_url: "https://openweathermap.org/img/wn/01d@4x.png",
        link: { name: 'WeekWeather', params: { city: "Paris" } }
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
