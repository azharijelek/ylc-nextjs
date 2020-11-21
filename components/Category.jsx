import Head from 'next/head'
import Box from '@material-ui/core/Box'
import HorizontalScroll from '@/components/HorizontalScroll'
import HeroCard from '@/components/HeroCard'
import PostGrid from '@/components/postswidget/PostGrid'
import LazyLoad from 'react-lazyload'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import RecentNews from '@/components/home_widgets/RecentNews'
import { parseHtmlEntities } from '@/lib/helpers'

export default function Category(props) {
  const term = props.data.detail
  const posts = props.data.posts
  const recentposts = props.data.posts
  const subcategories = props.data.subcats

  return (
    <>
      <Head>
        <title>{parseHtmlEntities(term.name)} - Your Life Choices</title>
      </Head>
      <section className="container" style={{ maxWidth: '100%', overflowX: 'scroll' }}>
        <h1 dangerouslySetInnerHTML={{ __html: term.name }}></h1>
      </section>

      {posts.length > 0 ? (
        <Box pb={4}>
          <HorizontalScroll>
            {posts.slice(0, 4).map((post) => (
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
      ) : (
        <Box py={3} px={3} alignContent="center">
          <div className="text-center">
            <img
              src="/static/img/article.svg"
              alt="no article"
              loading="lazy"
              style={{ maxWidth: '225px' }}
              height="225"
              width="225"
            />
          </div>

          <Box mt={3} justifyContent="center" display="flex" flexWrap="wrap">
            <Box width="100%">
              <div className="text-center">
                <strong>No Articles</strong>
              </div>
            </Box>
            <Box my={2}>
              <div className="text-center">
                There is no article found under {parseHtmlEntities(term.name)}.
                <Box>
                  <Button
                    style={{ marginTop: 20, borderRadius: 50 }}
                    component="a"
                    variant="outlined"
                    color="primary"
                    href="/"
                    size="large"
                    disableElevation>
                    Back to Home
                  </Button>
                </Box>
              </div>
            </Box>
          </Box>
        </Box>
      )}

      {/* RECENT STORIES */}
      {recentposts.length > 0 && (
        <Box py={4} bgcolor="#f5f5f5">
          <Box px={3} mb={3}>
            <h4 className="ylc-widgethead">RECENT STORIES</h4>
          </Box>

          <HorizontalScroll>
            {/* <pre>{JSON.stringify(recentposts, null, 2)}</pre> */}
            {recentposts.slice(4).map((postitem) => (
              <div className="post-grid--item" key={'slider-' + postitem.id}>
                <PostGrid
                  id={postitem.id}
                  title={postitem.title}
                  thumbnail={postitem.featured_img}
                  permalink={process.env.APPHOST + postitem.slug}
                  categories={postitem.categories}
                  blurb={postitem.blurb}
                  key={'postitem-cat-' + postitem.id}
                />
              </div>
            ))}
          </HorizontalScroll>
        </Box>
      )}

      {/* SUB CATEGORIES */}
      {subcategories.length > 0 &&
        subcategories.map((cat, i) => (
          <Box py={4} key={cat.slug + '-sub-cat-' + i}>
            <Box px={3} mb={3}>
              <h4 className="ylc-widgethead" dangerouslySetInnerHTML={{ __html: cat.name }}></h4>
            </Box>
            <LazyLoad offset={[-100, 100]} height={288}>
              <HorizontalScroll>
                <RecentNews per_page="4" page={1} show_categories={1} cat={cat.slug} />
              </HorizontalScroll>

              <Box mt={2} px={5} className="text-center">
                <Link href={cat.link} passHref>
                  <Button component="a" variant="outlined" color="primary" fullWidth>
                    View More Articles
                  </Button>
                </Link>
              </Box>
            </LazyLoad>
          </Box>
        ))}

      <style jsx>{`
        h1 {
          font-size: 26px;
          line-height: 35px;
          margin-top: 0;
        }

        .slide-item {
          flex: 0 0 auto;
          padding: 0 15px 0 0;
          &:first-of-type {
            padding-left: 15px !important;
          }
        }

        .post-grid--item {
          width: 80%;
          flex: 0 0 auto;
          padding: 0 15px 0 0;
          &:first-of-type {
            padding-left: 15px;
          }
        }
      `}</style>
    </>
  )
}
