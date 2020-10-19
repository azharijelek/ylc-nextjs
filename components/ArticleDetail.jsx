import PropTypes from 'prop-types'
import Head from 'next/head'

export default function ArticleDetail(props) {
  const createMarkup = function ($html) {
    return { __html: $html }
  }
  return (
    <>
      <Head>
        <title>{props.data.title} - Your Life Choices</title>
      </Head>
      <section className="container" style={{ maxWidth: '100%', overflowX: 'scroll' }}>
        <article>
          {/* Post title */}
          <h1>{props.data.title}</h1>

          {/* Blurb */}
          <p className="blurb">{props.data.blurb}</p>

          {/* Post Thumbnail */}
          {props.data.featured_img && (
            <div className="post-thumbnail">
              <img
                src={props.data.featured_img && props.data.featured_img + '&h=170'}
                alt={props.data.title}
                height="170"
                loading="lazy"
              />
            </div>
          )}

          {/* CONTENT */}
          <div className="content" dangerouslySetInnerHTML={createMarkup(props.data.content)}></div>
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

ArticleDetail.propTypes = {
  data: PropTypes.any
}
