import { Component } from 'react'
import Head from 'next/head'
import DateRangeIcon from '@material-ui/icons/DateRange'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'

/**
 * render html markup
 * @param {*} $html
 */
function createMarkup($html) {
  return { __html: $html }
}
export default class ArticleDetail extends Component {
  render() {
    const item = this.props.data
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

        <section className="container" style={{ maxWidth: '100%', overflowX: 'scroll' }}>
          <article>
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
                <div>{item.comments} Comments</div>
              </div>
            </div>

            {/* Post Thumbnail */}
            {item.featured_img && (
              <div className="post-thumbnail">
                <img
                  src={item.featured_img && item.featured_img + '&h=170'}
                  alt={item.title}
                  height="170"
                  loading="lazy"
                />
              </div>
            )}

            {/* CONTENT */}
            <div className="content" dangerouslySetInnerHTML={createMarkup(item.content)}></div>
          </article>
        </section>

        <style jsx>{`
          .container {
            padding: 25px 15px;
          }

          h1 {
            font-size: 26px;
            line-height: 35px;
            margin-top: 0;
            margin-bottom: 20px;
          }

          p.blurb {
            font-size: 18px;
            line-height: 24px;
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

          .post-date {
            color: #696969;
            margin-bottom: 5px;
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

          .post-thumbnail {
            overflow: hidden;
            border-radius: 5px;
            height: 170px;
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
        `}</style>
      </>
    )
  }
}
