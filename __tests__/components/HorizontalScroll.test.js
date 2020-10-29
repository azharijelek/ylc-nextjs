import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import HorizontalScroll from '@/components/HorizontalScroll'

configure({ adapter: new Adapter() })

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
