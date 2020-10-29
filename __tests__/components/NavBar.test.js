import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from 'enzyme'
import NavBar from '@/components/NavBar'

configure({ adapter: new Adapter() })

describe('NavBar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders Logo', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('HomeLogo')).toHaveLength(1)
  })

  it('renders Buttons', () => {
    const wrapper = mount(<NavBar />)
    expect(wrapper.find('button')).toHaveLength(2)
  })

  it('renders search button', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('.btn-search')).toHaveLength(1)
  })

  it('renders menu button', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('.btn-menu')).toHaveLength(1)
  })

  it('renders menu drawer', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('.ylc-drawer')).toHaveLength(1)
  })

  it("renders menu drawer's Head", () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('.drawerHead')).toHaveLength(1)
  })

  it('renders signup button', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('.signUpButton')).toHaveLength(1)
  })

  it('renders drawer dismiss button', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('.btn-closedrawer')).toHaveLength(1)
  })

  it('renders drawer menu list', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('.sideMenu')).toHaveLength(1)
  })

  it('should has 10 menu items', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('.sideMenu').find('li')).toHaveLength(10)
  })

  it('should call handleDrawerOpen when .btn-menu clicked', () => {
    const handleDrawerOpen = jest.fn()
    const wrapper = shallow(<NavBar onClick={handleDrawerOpen} />)

    wrapper.find('.btn-menu').prop('onClick')()

    setTimeout(() => {
      expect(handleDrawerOpen).toHaveBeenCalled()
    })
  })

  it('should call handleDrawerClose when .btn-closedrawer clicked', () => {
    const handleDrawerClose = jest.fn()
    const wrapper = shallow(<NavBar onClick={handleDrawerClose} />)

    wrapper.find('.btn-closedrawer').prop('onClick')()

    setTimeout(() => {
      expect(handleDrawerClose).toHaveBeenCalled()
    })
  })
})
