import Head from 'next/head'
import Box from '@material-ui/core/Box'
import HorizontalScroll from '@/components/HorizontalScroll'
import HeroCard from '@/components/HeroCard'
import PostGrid from '@/components/postswidget/PostGrid'

export default function Category(props) {
  const term = props.data.detail
  const posts = props.data.posts
  const recentposts = props.data.posts
  return (
    <>
      <Head>
        <title>{term.name} - Your Life Choices</title>
      </Head>
      <section className="container" style={{ maxWidth: '100%', overflowX: 'scroll' }}>
        <h1>{term.name}</h1>
      </section>

      {posts && (
        <Box mb={3}>
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
      )}

      <Box my={4}>
        <Box px={2}>
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
