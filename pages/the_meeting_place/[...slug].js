import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress'
import DefaultErrorPage from 'next/error'
import Box from '@material-ui/core/Box'

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps() {
  //const slug = params.slug // [ 'food-recipes', 'food', 'the-best-and-worst-foods-for-your-liver' ]
  //const path = slug.join('/')
  const data = {
    detail: []
  }
  return {
    props: data ? { data } : {},
    revalidate: 100
  }
}

export default function Post({ data }) {
  const { isFallback } = useRouter()

  if (!isFallback && !data) {
    return <div>Error</div>
  }

  const Loader = () => {
    return (
      <>
        <div className="loading">
          <CircularProgress />
        </div>
        <style jsx>{`
          .loading {
            width: 100%;
            text-align: center;
            height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </>
    )
  }

  if (typeof data != 'undefined' && data.type == 'unknown') {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <main className="ylc-outtest-wrapper">
        {isFallback ? (
          <Loader />
        ) : (
          <Box py={5} mt={3} justifyContent="center" display="flex" flexWrap="wrap">
            <Box width="100%">
              <div className="text-center">
                <img
                  src="/static/img/article.svg"
                  alt="no article"
                  loading="lazy"
                  style={{ maxWidth: '225px' }}
                  height="225"
                  width="225"
                />
                <div style={{ marginTop: 20 }}>
                  <strong>Forum is currently under construction</strong>
                </div>
              </div>
            </Box>
          </Box>
        )}
      </main>
      <style jsx>{`
        .text-center {
          text-align: center;
          div {
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  )
}
