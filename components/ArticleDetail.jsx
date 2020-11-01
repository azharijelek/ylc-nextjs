import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default class ArticleDetail extends React.Component {
  // State
  constructor(props) {
    super(props)
    this.state = { data: props }
  }

  /**
   * render html markup
   * @param {*} $html
   */
  createMarkup($html) {
    return { __html: $html }
  }

  render() {
    const item = this.state.data.data
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
            {/* Post title */}
            <h1>{item.title}</h1>

            {/* Blurb */}
            <p className="blurb">{item.blurb}</p>

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
            <div
              className="content"
              dangerouslySetInnerHTML={this.createMarkup(item.content)}></div>
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
          }

          p.blurb {
            font-size: 18px;
            line-height: 24px;
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

ArticleDetail.propTypes = {
  data: PropTypes.any
}
