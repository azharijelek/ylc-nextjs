import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'
import preloadAll from 'jest-next-dynamic'

configure({ adapter: new Adapter() })

import TopGames from '@/components/TopGames'

beforeAll(async () => {
  await preloadAll()
})

//const logopath = '/static/logo.svg'
const wrapper = mount(<TopGames />)

describe('TopGames', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders 4 Images', () => {
    expect(wrapper.find('img')).toHaveLength(4)
  })

  it('renders 4 div containers', () => {
    expect(wrapper.find('div')).toHaveLength(4)
  })
})
