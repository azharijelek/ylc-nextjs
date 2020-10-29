import '@testing-library/jest-dom'
import React from 'react'
import { shallow, mount } from 'enzyme'
import NavBar from '@/components/NavBar'

describe('NavBar', () => {
  // let wrapper
  // beforeEach(() => {
  //   wrapper = shallow(<NavBar />)
  // })
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
    const comp = shallow(<NavBar />)
    expect(comp.find('.ylc-drawer')).toHaveLength(1)
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

  it('should show menu drawer on .btn-menu click', () => {
    const container = shallow(<NavBar />)
    container.find('.btn-menu').simulate('click')
    expect(container.find('.ylc-drawer').prop('open')).toBeTruthy()
  })

  it('should hide menu drawer on .btn-closedrawer click', () => {
    const container = shallow(<NavBar />)
    container.find('.btn-closedrawer').simulate('click')
    expect(container.find('.ylc-drawer').prop('open')).toBeFalsy()
  })
})
