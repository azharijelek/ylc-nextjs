import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import HeroCard from '@/components/HeroCard'

configure({ adapter: new Adapter() })

describe('<HeroCard/>', () => {
  const mainProps = {
    thumbnail: '',
    title: '',
    permalink: ''
  }

  it('renders correctly', () => {
    const wrapper = shallow(<HeroCard />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should pass the props', () => {
    const img_url =
      'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/d62a2631cf50.jpg?f=webp'
    const permalink =
      'http://localhost:4200/travel/travel-resources/resources-travel-experiences/ten-things-to-stop-on-aeroplanes'
    const title = 'Lorem ipsum'

    const wrapper = shallow(
      <HeroCard {...mainProps} thumbnail={img_url} title={title} permalink={permalink} />
    )

    expect(wrapper.find('img').prop('src')).toBe(img_url + '&h=200')
    expect(wrapper.find('h2').find('a').prop('title')).toBe(title)
    expect(wrapper.find('h2').find('Link').prop('href')).toBe(permalink)
  })
})
