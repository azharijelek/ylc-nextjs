import React from 'react'
import { shallow } from 'enzyme'

import HorizontalScroll from '@/components/HorizontalScroll'

describe('<HorizontalScroll/>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HorizontalScroll />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should has .hs class', () => {
    const wrapper = shallow(<HorizontalScroll />)
    expect(wrapper.find('.hs')).toHaveLength(1)
  })
})
