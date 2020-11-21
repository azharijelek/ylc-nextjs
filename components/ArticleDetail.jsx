import { Component } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import DateRangeIcon from '@material-ui/icons/DateRange'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import LazyLoad from 'react-lazyload'
const Comments = dynamic(import('@/components/article/Comments'), { ssr: false })

const S3_URL = process.env.S3_URL
export default class ArticleDetail extends Component {
  render() {
    const item = this.props.data
    const img =
      item.featured_img != ''
        ? item.featured_img
        : 'https://cdn.statically.io/img/' + S3_URL + item.ylc_news_data.featured_image

    return (
      <>
        <Head>
          <title>{item.title} - Your Life Choices</title>
          <meta name="description" content={item.blurb} />

          {/* OG Tags */}
          <meta property="og:site_name" content="Your Life Choices Pty Ltd" key="ogsitename" />
          <meta property="og:title" content={item.title} key="ogtitle" />
          <meta property="og:description" content={item.blurb} key="ogdesc" />
          <meta property="og:image" content={item.featured_img} key="ogimage" />

          {/* Twitter Cards tags */}
          <meta name="twitter:title" content={item.title} />
          <meta name="twitter:description" content={item.blurb} />
          <meta name="twitter:image" content={item.featured_img} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <article
          key={'post-' + item.id}
          id={'post-' + item.id}
          className={'container post-' + item.id}>
          {/* <pre>{JSON.stringify(this.props.data, null, 2)}</pre> */}

          {/* Date */}
          <div className="post-date">
            <div className="date-icon">
              <DateRangeIcon fontSize="small" />
            </div>
            <div>{item.date}</div>
          </div>

          {/* Post title */}
          <h1>{item.title}</h1>

          {/* Blurb */}
          <p className="blurb">{item.blurb}</p>

          {/* Post Meta */}
          <div className="post-meta">
            <div className="author">
              {/* Avatar */}
              <div className="author-avatar">
                <img src={item.author.avatar} alt={item.author.name} loading="lazy" />
              </div>

              {/* Author Name */}
              <div className="author-name"> {item.author.name}</div>
            </div>
            <div className="post-comment">
              <div className="comment-icon">
                <ChatBubbleOutlineIcon fontSize="small" />
              </div>
              <div>
                {item.comments}{' '}
                <a href={'#comments-' + item.id}>{item.comments <= 1 ? 'Comment' : 'Comments'}</a>
              </div>
            </div>
          </div>

          {/* Post Thumbnail */}
          {img != null && img != false && (
            <div className="post-thumbnail">
              <img src={img + '?f=webp&h=220&q=70'} alt={item.title} height="220" loading="lazy" />
            </div>
          )}

          {/* CONTENT */}
          <div className="content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </article>

        {/* COMMENTS */}
        <section
          id={'comments-' + item.id}
          style={{ padding: '15px 15px 25px', background: '#fbfbfb' }}>
          <h4 className="ylc-widgethead">{item.comments} COMMENTS</h4>
          <LazyLoad offset={[-100, 100]} height={290}>
            <Comments postId={item.id} />
          </LazyLoad>
        </section>

        <style jsx>{`
          article {
            max-width: 100%;
            width: 100%;
            word-break: break-word;
          }
          .post-date {
            color: #696969;
            margin-bottom: 10px;
            font-size: 14px;
            display: flex;
            align-items: center;
            .date-icon {
              width: 16px;
              margin-right: 10px;
              position: relative;
              top: 2px;
              color: #006cab;
            }
          }

          h1 {
            font-size: 26px;
            line-height: 35px;
            margin-top: 0;
            margin-bottom: 0;
          }

          p.blurb {
            font-size: 18px;
            line-height: 28px;
            margin: 10px 0;
          }

          .post-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            margin: 20px 0;
            color: #696969;

            .author {
              display: flex;
              align-items: center;
              .author-avatar {
                width: 40px;
                height: 40px;
                overflow: hidden;
                border-radius: 40px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              .author-name {
                margin-left: 10px;
              }
            }
          }

          .post-comment {
            display: flex;
            align-items: center;
            line-height: 1;
            .comment-icon {
              width: 16px;
              margin-right: 10px;
              position: relative;
              top: 2px;
              color: #006cab;
            }
          }

          .post-thumbnail {
            overflow: hidden;
            margin-left: -20px;
            margin-right: -20px;
            width: auto;
            height: 220px;
            background: #f5f5f5;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover !important;
            }
          }

          p + br {
            display: none;
          }
          .ylc-widgethead {
            margin-top: 30px !important;
            margin-bottom: 30px !important;
          }
        `}</style>
      </>
    )
  }
}
