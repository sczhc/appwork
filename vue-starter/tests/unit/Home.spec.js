import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.element.querySelector('h4').textContent)
      .toEqual('Home')
  })
})
