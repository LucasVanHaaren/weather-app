import { shallowMount } from '@vue/test-utils'
import ShortDayWeather from "@/components/ShortDayWeather.vue"

describe('ShortDayWeather.vue', () => {
  it('match snapshot', () => {
    const wrapper = shallowMount(ShortDayWeather, {
      propsData: {
        name: "Monday",
        temperature: 22,
        humidity: 45,
        icon_url: "https://openweathermap.org/img/wn/01d@4x.png",
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
