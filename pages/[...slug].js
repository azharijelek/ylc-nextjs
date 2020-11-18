import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
const ArticleDetail = dynamic(import('@/components/ArticleDetail'), { ssr: true })
const Category = dynamic(import('@/components/Category'), { ssr: true })
const CategorySub = dynamic(import('@/components/CategorySub'), { ssr: true })
import CircularProgress from '@material-ui/core/CircularProgress'
import DefaultErrorPage from 'next/error'
import Articles from '@/lib/Articles'
export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const slug = params.slug // [ 'food-recipes', 'food', 'the-best-and-worst-foods-for-your-liver' ]
  const path = slug.join('/')
  try {
    const response = await Articles.postDetail(path)
    const data = await response.data
    return {
      props: data ? { data } : {},
      revalidate: 100
    }
  } catch (error) {
    // The Twitter API most likely died
    return { props: {} }
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

  return (
    <>
      <main className="ylc-outtest-wrapper">
        {isFallback ? (
          <Loader />
        ) : (
          <>
            {data.type == 'post' && <ArticleDetail data={data.detail} />}
            {/* {data.type == 'category' && <Category data={data} />} */}
            {data.type == 'category' && (
              <>
                {data.detail.parent == 0 ? <Category data={data} /> : <CategorySub data={data} />}
              </>
            )}
            {/* {data.type == 'unknown' && <DefaultErrorPage statusCode={404} />} */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          </>
        )}
      </main>
    </>
  )
}
