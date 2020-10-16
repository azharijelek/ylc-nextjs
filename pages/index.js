import Head from 'next/head'
import Box from '@material-ui/core/Box'
import HorizontalScroll from '@/components/HorizontalScroll'
import HeroCard from '@/components/HeroCard'
import dynamic from 'next/dynamic'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const PopularPosts = dynamic(import('@/components/home_widgets/PopularPosts'), { ssr: false })
const RecentNews = dynamic(import('@/components/home_widgets/RecentNews'), { ssr: false })
const TopGames = dynamic(import('@/components/TopGames'), { ssr: false })

const Home = (data) => {
  const posts = data.data

  const home_categories = [
    { name: 'TRAVEL', slug: 'travel' },
    { name: 'RETIREMENT', slug: 'retirement' },
    { name: 'RECIPES', slug: 'recipes' },
    { name: 'MONEY', slug: 'finance' },
    { name: 'HEALTH', slug: 'health' },
    { name: 'AGE PENSION', slug: 'age-pension' },
    { name: 'LIFE', slug: 'lifestyle' }
  ]

  return (
    <>
      <Head>
        <title>Your Life Choices</title>
      </Head>

      <main id="site-content">
        {/* Render Post Slider */}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {posts && (
          <Box my={3}>
            <HorizontalScroll>
              {posts.map((post) => (
                <article className="slide-item" key={'slider-' + post.id}>
                  <HeroCard
                    thumbnail={post.featured_img}
                    title={post.title}
                    permalink={process.env.APPHOST + post.slug}
                  />
                </article>
              ))}
            </HorizontalScroll>
          </Box>
        )}

        {/* Popular Posts */}
        <Box my={4} px={2}>
          <h4 className="ylc-widgethead">MOST POPULAR</h4>
          <PopularPosts per_page={4} />
        </Box>

        {/* Recent News */}
        <Box my={4}>
          <Box px={2}>
            <h4 className="ylc-widgethead">RECENT NEWS</h4>
          </Box>

          <HorizontalScroll>
            <RecentNews offset="6" per_page="8" page={1} show_categories={1} />
          </HorizontalScroll>
        </Box>

        {/* Top Games */}
        <Box my={4} px={2}>
          <h4 className="ylc-widgethead">TOP GAMES</h4>

          <TopGames />

          <Link href="/fun/games">
            <Button component="a" fullWidth variant="outlined" color="primary">
              View More Games
            </Button>
          </Link>
        </Box>

        {/* NEWS BY CATEGORY */}
        {home_categories.map((cat) => (
          <Box my={4} key={cat.slug}>
            <Box px={2}>
              <h4 className="ylc-widgethead">{cat.name}</h4>
            </Box>

            <HorizontalScroll>
              <RecentNews per_page="4" page={1} show_categories={1} cat={cat.slug} />
            </HorizontalScroll>
          </Box>
        ))}

        <style jsx>{`
          .slide-item {
            flex: 0 0 auto;
            padding: 0 15px 0 0;
            &:first-of-type {
              padding-left: 15px !important;
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
    revalidate: 5
  }
}

export default Home
