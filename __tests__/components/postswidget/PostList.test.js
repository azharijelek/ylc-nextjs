import React from 'react'
import { shallow } from 'enzyme'
import PostList from '@/components/postswidget/PostList'

describe('<PostList/>', () => {
  let wrapper, post, PostListComp

  beforeEach(() => {
    post = {
      featured_img:
        'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/f4aa5f507148.jpg?f=webp',
      id: 533593,
      permalink:
        'http://localhost:4200/technology/safety-online/secure-access/password-managers-explained/',
      slug: '/technology/safety-online/secure-access/password-managers-explained/',
      title: 'Password managers explained: do you need one? Are they safe?'
    }

    PostListComp = (
      <PostList
        id={post.id}
        title={post.title}
        thumbnail={post.featured_img}
        permalink={post.permalink}
        key={'PopularPost-' + post.id}
      />
    )

    wrapper = shallow(PostListComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have article with class: .post-${post_id}', () => {
    expect(wrapper.find('article')).toHaveLength(1)
    expect(wrapper.find('.post-' + post.id)).toHaveLength(1)
  })

  it('should have postThumb', () => {
    expect(wrapper.find('.postThumb')).toHaveLength(1)
    expect(wrapper.find('.postThumb').find('.media')).toHaveLength(1)
    expect(wrapper.find('.media').find('img')).toHaveLength(1)
  })

  it('should render correct post thumbnail structure', () => {
    const img = wrapper.find('.media').find('img')
    expect(img.prop('src')).toBe(post.featured_img)
    expect(img.prop('alt')).toBe(post.title)
    expect(img.prop('width')).toBe('60')
    expect(img.prop('height')).toBe('60')
    expect(img.prop('loading')).toBe('lazy')
  })

  it('should have postDetail', () => {
    expect(wrapper.find('.postDetail')).toHaveLength(1)
  })

  it('should have correct postDetail elements', () => {
    expect(wrapper.find('.postDetail').find('h4')).toHaveLength(1)
    expect(wrapper.find('.postDetail').find('h4 Link')).toHaveLength(1)
    expect(wrapper.find('.postDetail').find('h4 Link a')).toHaveLength(1)
  })

  it('should render correct permalink', () => {
    expect(wrapper.find('.postDetail').find('h4 Link').prop('href')).toBe(post.permalink)
    expect(wrapper.find('.postDetail').find('h4 Link a').prop('title')).toBe(post.title)
  })
})
