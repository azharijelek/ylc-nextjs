import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default class ArticleDetail extends React.Component {
  /**
   * render html markup
   * @param {*} $html
   */
  createMarkup($html) {
    return { __html: $html }
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.data.title} - Your Life Choices</title>
          <meta name="description" content={this.props.data.blurb} />

          {/* OG Tags */}
          <meta property="og:site_name" content="Your Life Choices Pty Ltd" key="ogsitename" />
          <meta property="og:title" content={this.props.data.title} key="ogtitle" />
          <meta property="og:description" content={this.props.data.blurb} key="ogdesc" />
          <meta property="og:image" content={this.props.data.featured_img} key="ogimage" />

          {/* Twitter Cards tags */}
          <meta name="twitter:title" content={this.props.data.title} />
          <meta name="twitter:description" content={this.props.data.blurb} />
          <meta name="twitter:image" content={this.props.data.featured_img} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <section className="container" style={{ maxWidth: '100%', overflowX: 'scroll' }}>
          <article>
            {/* Post title */}
            <h1>{this.props.data.title}</h1>

            {/* Blurb */}
            <p className="blurb">{this.props.data.blurb}</p>

            {/* Post Thumbnail */}
            {this.props.data.featured_img && (
              <div className="post-thumbnail">
                <img
                  src={this.props.data.featured_img && this.props.data.featured_img + '&h=170'}
                  alt={this.props.data.title}
                  height="170"
                  loading="lazy"
                />
              </div>
            )}

            {/* CONTENT */}
            <div
              className="content"
              dangerouslySetInnerHTML={this.createMarkup(this.props.data.content)}></div>
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
