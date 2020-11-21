import React from 'react'
import { shallow } from 'enzyme'
import ArticleDetail from '@/components/ArticleDetail'

describe('<ArticleDetail/>', () => {
  let wrapper, data
  beforeEach(() => {
    // Mock data
    data = {
      id: 533593,
      title: 'Password managers explained: do you need one? Are they safe?',
      featured_img:
        'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/f4aa5f507148.jpg?f=webp',
      blurb: 'How to tell a good password manager from a bad one.',
      content:
        '<p>We know we are supposed to have passwords that should be changed regularly, but very few of us actually do it. Coming up with strong, varied passwords can be painful. And remembering them? Forget about it.</p>\n<p></p>\n<p>Most people use very weak passwords and reuse them across many &lsquo;logins&rsquo;. So, how are you supposed to use strong, unique passwords for all the sites and stores and subscriptions in your system? The answer is to use a password manager.</p>\n<p></p>\n<p>Password managers will securely store your login information and help you to log into sites automatically. They encrypt your password database with a master password &ndash; the only one you have to remember. Or you can create your own master password. Just make sure it&rsquo;s impossible to crack and, whatever you do, don&rsquo;t forget it!</p>\n<p></p>\n<p>Types of password managers include:</p>\n<p></p>\n<ul type="disc">\n</p>\n<li>locally installed software applications</li>\n<p></p>\n<li>online services accessed through website portals</li>\n<p></p>\n<li>locally accessed hardware devices that serve as keys.</li>\n<p></ul>\n<p></p>\n<p>&nbsp;</p>\n<p></p>\n<p><strong>Locally installed software</strong><br />Password managers are commonly stored on the user&rsquo;s personal computer or mobile device in the form of a software application. These apps can be offline, with the password database stored on the same device, or they may offer or require a cloud-based approach, where the password database is stored remotely.</p>\n<p></p>\n<p>Some offline password managers do not require internet permission, so there is no leakage of data due to the network. To some extent, a fully offline password manager is more secure, but may be much weaker in convenience and functionality than an online one.</p>\n<p></p>\n<p><strong>Web-based services</strong><br />An online password manager is a website that securely stores login details. They are a web-based version of more conventional desktop-based password managers.</p>\n<p></p>\n<p>The advantages of online password managers over desktop-based versions are portability and a reduced risk of losing passwords through theft from or damage to a single PC.</p>\n<p></p>\n<p><strong>Hardware devices</strong><br />Security tokens can also act as a password manager. Smart cards or secure USB flash devices are used to authenticate a user in lieu of or in addition to a traditional text-based password.</p>\n<p></p>\n<p>The data stored in the token is usually encrypted to prevent probing and unauthorised reading of the data.</p>\n<p></p>\n<p><strong>What can go wrong?</strong><br />While password managers are generally very safe and improve your online security, there are still some vulnerabilities.</p>\n<p></p>\n<p>As with any system that involves the user entering a password, the master password may also be attacked and discovered by those intent to act maliciously. This risk can be mitigated with the use of multi-factor verification for your device.</p>\n<p></p>\n<p>Some password managers include a password generator and these generated passwords may be guessable if they use a weak number generator instead of a cryptographically secure one, so this is something you will want to investigate before signing up.</p>\n<p></p>\n<p><em>If you enjoy our content, don&rsquo;t keep it to yourself. Share our free eNews with your friends and encourage them to </em><a href="/member/register"><strong><em>sign up</em></strong></a><em>.</em></p>\n<p></p>\n<p><strong>Related articles:<br /></strong><a href="../../technology/computers/wow-the-grandkids-on-your-video-call">https://www.yourlifechoices.com.au/technology/computers/wow-the-grandkids-on-your-video-call</a><br /><a href="../../technology/news/who-is-calling-you-from-that-number">https://www.yourlifechoices.com.au/technology/news/who-is-calling-you-from-that-number</a><br /><a href="../../travel/travel-resources/what-google-maps-can-do-for-you">https://www.yourlifechoices.com.au/travel/travel-resources/what-google-maps-can-do-for-you</a></p>\n',
      categories: [
        {
          name: 'Technology',
          slug: 'technology',
          permalink: '/technology/'
        },
        {
          name: 'Safety Online',
          slug: 'safety-online',
          permalink: '/technology/safety-online/'
        },
        {
          name: 'Secure Access',
          slug: 'secure-access',
          permalink: '/technology/safety-online/secure-access/'
        }
      ],
      author: {
        avatar:
          'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/799106159ec3.jpg?q=100&w=40',
        name: 'Ben Hocking',
        slug: '/author/59'
      },
      date: 'September 2, 2020',
      comments: '1'
    }

    wrapper = shallow(<ArticleDetail data={data} />)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have <Head> tag', () => {
    expect(wrapper.find('Head')).toHaveLength(1)
  })

  it('should write "{post name} - Your Life Choices" on <title> tag', () => {
    expect(wrapper.find('title').text()).toBe(data.title + ' - Your Life Choices')
  })

  it('should have 9 meta items', () => {
    expect(wrapper.find('meta')).toHaveLength(9)
  })

  it('should render .container class', () => {
    expect(wrapper.find('.container')).toHaveLength(1)
  })

  it('should render article element', () => {
    expect(wrapper.find('article')).toHaveLength(1)
  })

  it('should render <h1>', () => {
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('should render correct post name inside <h1>', () => {
    expect(wrapper.find('h1').text()).toBe(data.title)
  })

  it('should render all post meta items', () => {
    expect(wrapper.find('.post-meta')).toHaveLength(1)
    expect(wrapper.find('.author')).toHaveLength(1)
    expect(wrapper.find('.author-avatar')).toHaveLength(1)
    expect(wrapper.find('.author-name')).toHaveLength(1)
    expect(wrapper.find('.post-comment')).toHaveLength(1)
    expect(wrapper.find('.comment-icon')).toHaveLength(1)
  })

  it('should render blurb', () => {
    expect(wrapper.find('p.blurb')).toHaveLength(1)
    expect(wrapper.find('p.blurb').text()).toBe(data.blurb)
  })

  it('should render correct featured image', () => {
    expect(wrapper.find('.post-thumbnail')).toHaveLength(1)

    const thumbnail = wrapper.find('.post-thumbnail')

    expect(thumbnail.find('img')).toHaveLength(1)
    expect(thumbnail.find('img').prop('src')).toBe(data.featured_img + '?h=170')
  })

  it('should render .content', () => {
    expect(wrapper.find('.content')).toHaveLength(1)
  })
})
