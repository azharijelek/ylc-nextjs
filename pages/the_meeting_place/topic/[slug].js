import { useRouter } from 'next/router'
import Head from 'next/head'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Articles from '@/lib/Articles'
import { parseHtmlEntities } from '@/lib/helpers'

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  try {
    const response = await Articles.getTopics(slug)
    const data = await response.data
    return {
      props: data ? { data } : {},
      revalidate: 100
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}

export default function forumTopics({ data }) {
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

  return (
    <>
      <main className="ylc-outtest-wrapper">
        {isFallback ? (
          <Loader />
        ) : (
          <>
            {data != null && (
              <>
                <Head>
                  <title>{parseHtmlEntities(data.title)} - Seniors Forum</title>
                </Head>
                <Box px={2} py={4}>
                  <h1 style={{ margin: '0 0 20px 0' }}>{data.title}</h1>
                  <div></div>d
                </Box>
              </>
            )}
          </>
        )}

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
      <style jsx>{`
        h1 {
          font-size: 26px;
          line-height: 35px;
          margin-top: 0;
        }
      `}</style>
    </>
  )
}
