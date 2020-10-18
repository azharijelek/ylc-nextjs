import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

export default function Post({ data }) {
  const { isFallback } = useRouter()

  if (!isFallback && !data) {
    return <div>Error</div>
  }

  return (
    <>
      {isFallback ? (
        'Generating...'
      ) : (
        <div style={{ maxWidth: '100%', overflowX: 'scroll' }}>
          Result
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
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
