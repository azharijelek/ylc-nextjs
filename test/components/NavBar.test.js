import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from 'enzyme'
import preloadAll from 'jest-next-dynamic'

configure({ adapter: new Adapter() })

import NavBar from '@/components/NavBar'

beforeAll(async () => {
  await preloadAll()
})

//const logopath = '/static/logo.svg'
const wrapper = shallow(<NavBar />)

describe('NavBar', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders Logo', () => {
    expect(wrapper.find('HomeLogo')).toHaveLength(1)
  })

  it('renders Buttons', () => {
    const wrapper = mount(<NavBar />)
    expect(wrapper.find('button')).toHaveLength(2)
  })
})
