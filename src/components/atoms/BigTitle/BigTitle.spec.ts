import { mount } from '@vue/test-utils'
import BigTitle from './BigTitle.vue'

describe('BigTitle', () => {
  it('should display title text', () => {
    const title = 'Title 1'
    const wrapper = mount(BigTitle, { props: { title } })

    expect(wrapper.find('h1').text()).toEqual(title)
  })
})
