import Head from 'next/head'
import Box from '@material-ui/core/Box'
import HorizontalScroll from '@/components/HorizontalScroll'
import HeroCard from '@/components/HeroCard'
import dynamic from 'next/dynamic'

const PopularPosts = dynamic(import('@/components/home_widgets/PopularPosts'), { ssr: false })
const RecentNews = dynamic(import('@/components/home_widgets/RecentNews'), { ssr: false })

const Home = (data) => {
  const posts = data.data

  return (
    <>
      <Head>
        <title>Your Life Choices</title>
      </Head>

      <main id="site-content">
        {/* Render Post Slider */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {/* {posts && (
          <Box my={3}>
            <HorizontalScroll>
              {posts.map((post) => (
                <article className="slide-item" key={'slider-' + post.id}>
                  <HeroCard
                    thumbnail={post.featured_img}
                    title={post.title}
                    permalink={post.slug}
                  />
                </article>
              ))}
            </HorizontalScroll>
          </Box>
        )} */}

        {/* Popular Posts */}
        <Box my={4} px={2}>
          <h4 className="ylc-widgethead">MOST POPULAR</h4>
          <PopularPosts per_page="4" />
        </Box>

        {/* Recent News */}
        <Box my={4}>
          <Box px={2}>
            <h4 className="ylc-widgethead">RECENT NEWS</h4>
          </Box>

          <HorizontalScroll>
            <RecentNews offset="6" per_page="8" page="1" show_categories={1} />
          </HorizontalScroll>
        </Box>

        <style jsx>{`
          .slide-item {
            flex: 0 0 auto;
            padding: 0 15px 0 0;
            &::first-of-type {
              padding-left: 15px;
            }
          }
        `}</style>
      </main>
    </>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const response = await fetch(process.env.WP_API_URL + '/ylc/v1/posts?per_page=5')
  const data = await response.json()

  // Pass data to the page via props
  return {
    props: { data },
    revalidate: 300
  }
}

export default Home
