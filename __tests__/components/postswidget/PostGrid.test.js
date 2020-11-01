import React from 'react'
import { shallow, render } from 'enzyme'
import PostGrid from '@/components/postswidget/PostGrid'

describe('<PostGrid/>', () => {
  let wrapper, post, PostGridComp

  beforeEach(() => {
    post = {
      blurb: 'How to tell a good password manager from a bad one.',
      categories: { slug: '/technology/safety-online/secure-access/', name: 'Secure Access' },
      date: 'September 2, 2020',
      featured_img:
        'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/f4aa5f507148.jpg?f=webp',
      id: 533593,
      permalink:
        'http://localhost:4200/technology/safety-online/secure-access/password-managers-explained/',
      slug: '/technology/safety-online/secure-access/password-managers-explained/',
      title: 'Password managers explained: do you need one? Are they safe?'
    }

    PostGridComp = (
      <PostGrid
        id={post.id}
        title={post.title}
        thumbnail={post.featured_img}
        permalink={post.permalink}
        categories={post.categories}
        blurb={post.blurb}
        key={'post-' + post.id}
      />
    )

    wrapper = shallow(PostGridComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have article with class: .post-grid post-${post_id}', () => {
    expect(wrapper.find('article')).toHaveLength(1)
    expect(wrapper.find('.post-' + post.id)).toHaveLength(1)
  })

  it('should have post-grid--thumb', () => {
    expect(wrapper.find('.post-grid--thumb')).toHaveLength(1)
    expect(wrapper.find('.post-grid--thumb').find('img')).toHaveLength(1)
  })

  it('should have .cat-badge', () => {
    expect(wrapper.find('.cat-badge')).toHaveLength(1)
  })

  it('should have render category name correctly', () => {
    const tree = render(PostGridComp)
    const categorybadge = tree.find('.cat-badge')
    expect(categorybadge.find('span').text()).toBe(post.categories.name)
  })

  it('should have .postDetail class', () => {
    expect(wrapper.find('.postDetail')).toHaveLength(1)
  })

  it('should have .postDetail class', () => {
    expect(wrapper.find('.postDetail')).toHaveLength(1)
  })

  it('.postDetail should have <h4> and <a>', () => {
    expect(wrapper.find('h4')).toHaveLength(1)
    expect(wrapper.find('h4 a')).toHaveLength(1)
  })

  it('.postDetail anchor should has <Link> component', () => {
    expect(wrapper.find('h4 Link')).toHaveLength(1)
  })

  it('<Link> href should contain correct permalink', () => {
    expect(wrapper.find('h4 Link').prop('href')).toBe(post.permalink)
  })

  it('.postDetail anchor should render correct post name', () => {
    expect(wrapper.find('h4 a').text()).toBe(post.title)
  })

  it('.postDetail should have p tag and render correct blurb text', () => {
    expect(wrapper.find('.postDetail').find('p')).toHaveLength(1)
    expect(wrapper.find('.postDetail').find('p').text()).toBe(post.blurb)
  })
})
