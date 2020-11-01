import React from 'react'
import { shallow } from 'enzyme'
import ArticleDetail from '@/components/ArticleDetail'

describe('<ArticleDetail/>', () => {
  let wrapper, data
  beforeEach(() => {
    // Mock data
    data = {
      id: 533597,
      title: 'What are super funds doing with our $2.7 trillion?',
      featured_img:
        'https://cdn.statically.io/img/yourlifechoices.s3-ap-southeast-2.amazonaws.com/old/assets/autouploads/a808647fff7f.jpg?f=webp',
      blurb: 'Do you know how your fund invests your money? Do you care?',
      content:
        '<p>Our super funds hold about $2.7 trillion in their coffers &ndash; that&rsquo;s $2.7 trillion of our money. Many fund members do not know in which category their funds are invested, let alone where the fund managers invest those millions.</p>\n<p></p>\n<p>Richard Denniss, chief economist at The Australia Institute, recently wrote in <em>The Monthly</em>: &ldquo;Everyone knows that money talks, but most Australians have no idea who talks on behalf of their money. Superannuation is, for most of us, our biggest or second biggest investment. But while few of us would let strangers make all of the decisions about our house, our car or our bank accounts, the average Australian has no idea who the trustees of their superannuation fund are, no idea which companies their life savings are invested in, and no idea how their trustees are wielding the enormous power that comes with casting votes on their behalf at company meetings.&rdquo;</p>\n<p></p>\n<p>But is there a newfound transparency emerging at some funds? A willingness not just to share such information but also to broadcast it from the rooftops?</p>\n<p></p>\n<p>ESG &ndash; environmental, social and governance &ndash; has become a &lsquo;thing&rsquo;.</p>\n<p></p>\n<p>More and more super funds are demonstrating they have a conscience on such matters as global warming, renewable resources, logging &ndash; and that&rsquo;s proving popular in attracting members.</p>\n<p></p>\n<p>A new(ish) breed of websites offers guidance on how to find a fund that matches your philosophy, asking you about the issues that are most important to you and the investment areas issues you want to avoid.</p>\n<p></p>\n<p>First State Super, which is set for a name change to Aware Super, is one of the fresh wave of funds putting sustainability up there with investment returns. It recently announced that it was divesting from thermal coal as part of its Climate Change Portfolio Transition Plan.</p>\n<p></p>\n<p>Liza McDonald, head of responsible investments, told YourLifeChoices that the decision was based on concern about the environment and returns for members.</p>\n<p></p>\n<p>&ldquo;Our research, and our view, is that it (thermal coal) is likely to be a stranded asset risk for the fund,&rdquo; she said. &ldquo;Our decision to exit thermal coal and not invest in any new thermal coal was on the basis of long-term financial risk.</p>\n<p></p>\n<p><strong>&ldquo;</strong>We&rsquo;re invested in infrastructure, we&rsquo;re invested in property, we&rsquo;re invested in listed equities. All parts of the portfolio in all geographies can be exposed to the longer-term risks of climate change, around sea level rise, severe weather impacts and then transitioning to a low carbon economy, having to reduce emissions.&rdquo;</p>\n<p></p>\n<p>It&rsquo;s about supporting and steering public policy and about the investment case, she said.</p>\n<p></p>\n<p>&ldquo;We certainly support policy that also supports a low carbon economy.</p>\n<p></p>\n<p>&ldquo;[But] first and foremost, we are here to deliver returns to our members.</p>\n<p></p>\n<p>&ldquo;We also think, though, that how we invest and where we invest will deliver those returns but can also impact &hellip; both the environment and society.</p>\n<p></p>\n<p>&ldquo;So, being aware of what we invest in, how we allocate money into investments, we want to ensure we can deliver sustainable long-term returns.&rdquo;</p>\n<p></p>\n<p>The $4.05 billion wealth manager Australian Ethical Super reported record inflows of $660 million for the 2019&ndash;20 financial year, telling the <a href="https://www.financialstandard.com.au/news/australian-ethical-posts-record-results-168475954"><em>Financial Standard</em></a> that its balanced MySuper offering returned 6.9 per cent net of fees for the quarter. For the 2019&ndash;20 financial year, when many funds were struggling to post a positive return, Australian Ethical&rsquo;s balanced option returned 2.3 per cent net of fees.</p>\n<p></p>\n<p>Australian Ethical chief financial officer Mark Simons said the results proved that ethical, sustainable investments can generate market-leading results.</p>\n<p></p>\n<p>&ldquo;At the moment, ESG funds are outperforming their peers, and I hope that continues,&rdquo; he said.</p>\n<p></p>\n<p>&ldquo;Ethical investments are very much in the mainstream; they create sustainable returns, which are equal if not better [to their not-so-ethical counterparts].&rdquo;</p>\n<p></p>\n<p>Morningstar&rsquo;s latest <em>Global Sustainable Fund Flows</em> <a href="https://www.morningstar.com/lp/global-esg-flows#:~:text=In%20light%20of%20the%20global,the%20second%20quarter%20of%202020.">report</a>, which examined 3432 sustainable open-end funds and exchange-traded funds (ETFs) across the globe in the second quarter of 2020, found that sustainable funds had outperformed following the March market sell-off.</p>\n<p></p>\n<p>The $52 billion industry super fund Hesta is firmly on the bandwagon. It has announced it will reduce absolute carbon emissions from its investment portfolios by 33 per cent by 2030, and will transition to zero carbon emissions by 2050.</p>\n<p></p>\n<p>The <a href="https://www.unpri.org/">Principles for Responsible Investment</a> (PRI) shows the clout of super funds &ndash; and their members.</p>\n<p></p>\n<p>Retirement plans are at the top of the food chain in our financial and economic system, it says. &ldquo;Almost $50 trillion are held in workplace and personal pension plans, leaving workers and savers with significant, mostly untapped, influence to affect real world outcomes through a range of financial intermediaries.&rdquo;</p>\n<p></p>\n<p>In its latest report, PRI compared private retirement systems in Australia, the US and UK and their inclusion of ESG.</p>\n<p></p>\n<p>It said Australia was taking meaningful steps towards developing strategies. While industry funds had largely set the ball rolling, for-profit funds had taken over the running. Eighty-one per cent of for-profit super funds, it said, now had some form of responsible investment commitment.</p>\n<p></p>\n<p>&ldquo;APRA [Australian Prudential Regulation Authority] has applied sustained pressure on super funds to improve their operational and investment efficiency and to make choices simpler for members, but has only recently started to address environmental, social and governance issues,&rdquo; it said.</p>\n<p></p>\n<p>Does ethical investing attract members?</p>\n<p></p>\n<p>Ms McDonald says First State Super has a very active membership based in the health and education areas. It is third on the list of biggest funds, according to a SuperGuide <a href="https://www.superguide.com.au/comparing-super-funds/largest-super-funds">report</a> that ranked funds according to the value of assets under management at 30 June 2019, behind AustralianSuper and QSuper.</p>\n<p></p>\n<p>&ldquo;They&rsquo;re wanting to know how we&rsquo;re looking at a number of issues and how we think about those when we&rsquo;re investing,&rdquo; Ms McDonald said.</p>\n<p></p>\n<p>&ldquo;We get a lot of engagement from our members in that respect. And I do see it as a competitive advantage &hellip;</p>\n<p></p>\n<p>&ldquo;We have a role to engage our members and to educate the community in how we can invest, in how we can deliver returns but also do good.&rdquo;</p>\n<p></p>\n<p>Do you choose a super fund according to their investment principles? Are you encouraged by their potential influence?</p>\n<p></p>\n<p><em>If you enjoy our content, don&rsquo;t keep it to yourself. Share our free eNews with your friends and encourage them to </em><a href="/member/register"><strong><em>sign up</em></strong></a><em>.</em></p>\n<p></p>\n<p><strong>Related articles:<br /></strong><a href="../../retirement/news/retirement-income-system-fails-this-group">https://www.yourlifechoices.com.au/retirement/news/retirement-income-system-fails-this-group</a><br /><a href="../../retirement/news/work-longer-retire-later">https://www.yourlifechoices.com.au/retirement/news/work-longer-retire-later</a><br /><a href="../../retirement/news/50-and-working-your-days-may-be-numbered">https://www.yourlifechoices.com.au/retirement/news/50-and-working-your-days-may-be-numbered</a></p>\n',
      categories: [
        {
          name: 'finance',
          permalink: '/finance/'
        },
        {
          name: 'superannuation',
          permalink: '/finance/superannuation/'
        },
        {
          name: 'super-funds',
          permalink: '/finance/superannuation/super-funds/'
        }
      ]
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

  it('should render blurb', () => {
    expect(wrapper.find('p.blurb')).toHaveLength(1)
    expect(wrapper.find('p.blurb').text()).toBe(data.blurb)
  })

  it('should render correct featured image', () => {
    expect(wrapper.find('.post-thumbnail')).toHaveLength(1)

    const thumbnail = wrapper.find('.post-thumbnail')

    expect(thumbnail.find('img')).toHaveLength(1)
    expect(thumbnail.find('img').prop('src')).toBe(data.featured_img + '&h=170')
  })

  it('should render .content', () => {
    expect(wrapper.find('.content')).toHaveLength(1)
  })
})
