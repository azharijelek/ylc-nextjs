import React from 'react'
import { shallow } from 'enzyme'
import Footer from '@/components/Footer'

describe('<Footer/>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should has required dom classes', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.ylc-footer')).toHaveLength(1)
    expect(wrapper.find('.footer-bottom')).toHaveLength(1)
    expect(wrapper.find('p')).toHaveLength(1)
  })

  it('should has required dom classes', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.ylc-footer')).toHaveLength(1)
    expect(wrapper.find('.footer-bottom')).toHaveLength(1)
    expect(wrapper.find('img')).toHaveLength(1)
  })
})
