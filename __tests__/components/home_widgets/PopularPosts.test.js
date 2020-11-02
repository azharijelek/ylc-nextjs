import React from 'react'
import { shallow } from 'enzyme'
import PopularPosts from '@/components/home_widgets/PopularPosts'

describe('<PopularPosts/>', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<PopularPosts per_page={4} />)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
