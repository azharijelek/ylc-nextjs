import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount, shallow } from 'enzyme'
import { render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

configure({ adapter: new Adapter() })

import TopGames from '@/components/TopGames'

//const logopath = '/static/logo.svg'
const wrapper = mount(<TopGames />)

describe('TopGames', () => {
  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should renders 4 Images', () => {
    expect(wrapper.find('img')).toHaveLength(4)
  })

  it('should renders 4 div containers', () => {
    expect(wrapper.find('div')).toHaveLength(4)
  })

  it('should renders View More Games button', () => {
    const { getByText } = render(<TopGames />)
    const ViewMoreGames = getByText('View More Games')
    expect(ViewMoreGames).toBeInTheDocument()
  })

  it('should redirect to /fun/games', () => {
    const wrapper = shallow(<TopGames />)
    const ViewMoreGames = wrapper.find('.viewmoregames')
    expect(ViewMoreGames.prop('href')).toEqual('/fun/games')
  })
})
