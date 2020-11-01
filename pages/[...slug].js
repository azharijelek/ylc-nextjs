import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
const ArticleDetail = dynamic(import('@/components/ArticleDetail'), { ssr: true })
const Category = dynamic(import('@/components/Category'), { ssr: true })

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const slug = params.slug // [ 'food-recipes', 'food', 'the-best-and-worst-foods-for-your-liver' ]
  const path = slug.join('/')
  //console.log('slug', `${process.env.WP_API_URL}/ylc/v1/post?slug=${path}`)
  try {
    const response = await fetch(`${process.env.WP_API_URL}/ylc/v1/post?slug=${path}`)
    const data = await response.json()
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

  // const createMarkup = function ($html) {
  //   return { __html: $html }
  // }

  return (
    <>
      {isFallback ? (
        'Loading'
      ) : (
        <>
          {data.type == 'post' && <ArticleDetail data={data.detail} />}
          {data.type == 'category' && <Category data={data} />}

          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </>
      )}
    </>
  )
}
