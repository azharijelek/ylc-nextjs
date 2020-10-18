import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Post({ data }) {
  const { isFallback } = useRouter()

  if (!isFallback) {
    return <div>Error</div>
  }

  const createMarkup = function ($html) {
    return { __html: $html }
  }

  return (
    <>
      {isFallback ? (
        'Loading'
      ) : (
        <>
          <Head>
            <title>{data.title} - Your Life Choices</title>
          </Head>
          <section className="container" style={{ maxWidth: '100%', overflowX: 'scroll' }}>
            <article>
              {/* Post title */}
              <h1>{data.title}</h1>

              {/* Blurb */}
              <p className="blurb">{data.blurb}</p>

              {/* Post Thumbnail */}
              <div className="post-thumbnail">
                <img src={data.featured_img} alt={data.title} height="170" loading="lazy" />
              </div>

              {/* CONTENT */}
              <div className="content" dangerouslySetInnerHTML={createMarkup(data.content)}></div>
            </article>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
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

            .content {
              & >>> p {
                font-size: 16px;
              }
            }

            p + br {
              display: none;
            }
          `}</style>
        </>
      )}
    </>
  )
}

Post.propTypes = {
  data: PropTypes.any
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const slug = params.slug // [ 'food-recipes', 'food', 'the-best-and-worst-foods-for-your-liver' ]
  const path = slug.join('/')
  try {
    const response = await fetch(`http://localhost:8080/wp-json/ylc/v1/post?slug=${path}`)
    const data = await response.json()
    return {
      props: { data },
      revalidate: 100
    }
  } catch (error) {
    // The Twitter API most likely died
    return { props: {} }
  }
}
