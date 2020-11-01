import React from 'react'
import { shallow } from 'enzyme'
import Category from '@/components/Category'

describe('<Category/>', () => {
  let wrapper, dataProps
  beforeEach(() => {
    // Mock data
    dataProps = {
      posts: [
        {
          id: 533597,
          title: 'What are super funds doing with our $2.7 trillion?',
          permalink: '',
          slug: '/finance/superannuation/super-funds/what-are-funds-doing-with-our-trillions/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/a808647fff7f.jpg?f=webp',
          date: 'September 2, 2020',
          blurb: 'Do you know how your fund invests your money? Do you care?',
          categories: {
            slug: '/finance/superannuation/super-funds/',
            name: 'Super Funds'
          }
        },
        {
          id: 533592,
          title: 'Super statement simplified – what you do need to check',
          permalink: '',
          slug: '/finance/superannuation/super-statement-simplified/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/c5466bdbe586.jpg?f=webp',
          date: 'September 1, 2020',
          blurb:
            'They may look long and tedious, but there are key areas that you do need to check.',
          categories: {
            slug: '/finance/superannuation/',
            name: 'Superannuation'
          }
        },
        {
          id: 533652,
          title: 'COVID shock means one in five will delay retirement: study',
          permalink: '',
          slug: '/main/news-main/covid-to-delay-retirement/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/76aae4769587.jpg?f=webp',
          date: 'August 31, 2020',
          blurb:
            'An Australian Stock Exchange study suggests many Australians will delay retirement.',
          categories: {
            slug: '/main/news-main/',
            name: 'News'
          }
        },
        {
          id: 533567,
          title: 'How does Services Australia value excess land?',
          permalink: '',
          slug: '/finance/property/how-does-centrelink-value-land/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/275339c7c22b.jpg?f=webp',
          date: 'August 31, 2020',
          blurb:
            'Ron is purchasing a big property but thinks it might make him ineligible for the pension.',
          categories: {
            slug: '/finance/property/',
            name: 'Property'
          }
        },
        {
          id: 533657,
          title: 'Australia’s top economists oppose coming increases in compulsory super',
          permalink: '',
          slug: '/finance/superannuation/news-superannuation/economists-have-their-say-on-super/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/30ca41305388.jpg?f=webp',
          date: 'August 31, 2020',
          blurb:
            'The vast majority of leading Australian economists oppose super hikes set for 2021.',
          categories: {
            slug: '/finance/superannuation/news-superannuation/',
            name: 'Superannuation News'
          }
        },
        {
          id: 533548,
          title: 'What is a government bond? How do they work?',
          permalink: '',
          slug: '/finance/banking-and-investment/what-is-a-government-bond/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/a9267cc501c9.png?f=webp',
          date: 'August 28, 2020',
          blurb: 'Even bond traders find it hard to get a handle on what bonds are.',
          categories: {
            slug: '/finance/banking-and-investment/',
            name: 'Banking &amp; Investment'
          }
        },
        {
          id: 533653,
          title: 'What is the Future Fund and how does it work?',
          permalink: '',
          slug: '/government/federal-government/what-is-the-future-fund/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/92d5507ee67c.jpg?f=webp',
          date: 'August 28, 2020',
          blurb:
            'Established in 2006, the Future Fund was meant to strengthen government finances.',
          categories: {
            slug: '/government/federal-government/',
            name: 'Federal Government'
          }
        },
        {
          id: 533641,
          title: 'Timing the share market is hard – just ask your super fund',
          permalink: '',
          slug: '/main/news-main/timing-the-share-market-its-hard/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/06bf7f65d3c4.png?f=webp',
          date: 'August 27, 2020',
          blurb: 'If super funds are hesitant to aggressively time the markets, should you?',
          categories: {
            slug: '/main/news-main/',
            name: 'News'
          }
        },
        {
          id: 533644,
          title: 'Lessons from our parents that never went out of fashion',
          permalink: '',
          slug: '/main/news-main/lessons-from-parents-that-never-get-old/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/1cf8be37c457.jpg?f=webp',
          date: 'August 27, 2020',
          blurb: 'When it comes to money, maybe our parents and grandparents did know best.',
          categories: {
            slug: '/main/news-main/',
            name: 'News'
          }
        },
        {
          id: 533636,
          title: 'Heath fund profits plunge as premiums set to rise',
          permalink: '',
          slug: '/finance/insurance/health-fund-profits-down-premiums-up/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/193237db0198.jpg?f=webp',
          date: 'August 26, 2020',
          blurb: "Subsidised industry wants more support; opponents seek a ‘thorough rethink'.",
          categories: {
            slug: '/finance/insurance/',
            name: 'Insurance'
          }
        },
        {
          id: 533637,
          title: 'ATO’s 2020 pension ruling will hurt retirees',
          permalink: '',
          slug: '/age-pension/news-age-pension/pension-rule-hurts-retirees/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/4d9ad5540413.jpg?f=webp',
          date: 'August 26, 2020',
          blurb:
            'SMSF expert concerned about the way tax office will treat excess pension payments.',
          categories: {
            slug: '/age-pension/news-age-pension/',
            name: 'News'
          }
        },
        {
          id: 533279,
          title: 'Nothing like a pandemic to put pressure on estate planning',
          permalink: '',
          slug: '/health/covid19/covid-heaps-pressure-on-estate-planning/',
          featured_img:
            'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/4a44ca334958.jpg?f=webp',
          date: 'August 26, 2020',
          blurb: 'Why we need to get our affairs in order - and keep them that way.',
          categories: {
            slug: '/health/covid19/',
            name: 'COVID-19'
          }
        }
      ],
      type: 'category',
      detail: {
        term_id: 20871,
        name: 'Finance',
        slug: 'finance',
        term_group: 0,
        term_taxonomy_id: 20871,
        taxonomy: 'category',
        description: 'finance',
        parent: 0,
        count: 0,
        filter: 'raw',
        cat_ID: 20871,
        category_count: 0,
        category_description: 'finance',
        cat_name: 'Finance',
        category_nicename: 'finance',
        category_parent: 0
      }
    }
    wrapper = shallow(<Category data={dataProps} />)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render h1 tag with category name', () => {
    expect(wrapper.find('h1')).toHaveLength(1)
    expect(wrapper.find('h1').text()).toBe(dataProps.detail.name)
  })

  it('should has 2 HorizontalScroll', () => {
    expect(wrapper.find('HorizontalScroll')).toHaveLength(2)
  })

  it('should has 4 slide items class, and 4 <HeroCard/> components', () => {
    expect(wrapper.find('.slide-item')).toHaveLength(4)
    expect(wrapper.find('HeroCard')).toHaveLength(4)
  })

  it('should renders ylc-widgethead and', () => {
    expect(wrapper.find('.ylc-widgethead')).toHaveLength(1)
  })

  it('.ylc-widgethead should contain "RECENT STORIES" text', () => {
    expect(wrapper.find('.ylc-widgethead').text()).toBe('RECENT STORIES')
  })
})
