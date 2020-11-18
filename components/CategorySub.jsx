import React from 'react'
import Head from 'next/head'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import PostList from '@/components/postswidget/PostList'
import Pagination from '@material-ui/lab/Pagination'
import { parseHtmlEntities } from '@/lib/helpers'
import { useRouter } from 'next/router'

export default function SubCategory(props) {
  const router = useRouter()
  const router_page = router.query.page ? parseInt(router.query.page) : 1
  const term = props.data.detail
  const posts = props.data.posts
  const cat = props.data.detail.cat_ID
  const pagination = props.data.pagination ? props.data.pagination : 1

  const [page, setPage] = React.useState(router_page)
  const [pagingPosts, setPagingPosts] = React.useState([])

  React.useEffect(() => {
    if (router_page > 1) {
      fetchPosts(page)
    }
  }, [])

  /**
   * Fetch Posts under current category
   */
  const fetchPosts = async (paged) => {
    const params = {
      per_page: 12,
      page: paged,
      show_categories: 1,
      cat: cat
    }

    const queryString = Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&')

    try {
      const res = await fetch(`/api/posts?${queryString}`)
      const items = await res.json()
      setPagingPosts(items)
      setPage(paged)
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Handle Pagination change
   * @param {object} event
   * @param {Number} paged
   */
  const handleChange = (event, paged) => {
    if (paged == page) {
      return false
    }

    // Fetch Pagination posts
    fetchPosts(paged)

    // Scroll
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Update query
    var refresh =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?page=' +
      paged
    window.history.pushState({ path: refresh }, '', refresh)
  }

  return (
    <>
      <Head>
        <title>{parseHtmlEntities(term.name)} - Your Life Choices</title>
      </Head>
      <section className="container" style={{ maxWidth: '100%', overflowX: 'scroll' }}>
        <h1 dangerouslySetInnerHTML={{ __html: term.name }}></h1>
      </section>

      {posts.length > 0 ? (
        <>
          <Box pt={4} px={2}>
            {page == 1 ? (
              <>
                {posts.length > 0 &&
                  posts.map((post) => (
                    <PostList
                      id={post.id}
                      title={post.title}
                      thumbnail={post.featured_img + '&h=60'}
                      permalink={post.permalink}
                      postdate={post.date}
                      key={'category-' + post.id}
                    />
                  ))}
              </>
            ) : (
              <>
                {pagingPosts.length > 0 &&
                  pagingPosts.map((post) => (
                    <PostList
                      id={post.id}
                      title={post.title}
                      thumbnail={post.featured_img + '&h=60'}
                      permalink={post.permalink}
                      postdate={post.date}
                      key={'category-' + post.id}
                    />
                  ))}
              </>
            )}
          </Box>
          <Box pb={4} px={1} display="flex" flexWrap="wrap" justifyContent="center">
            <Pagination
              count={pagination.total_pages}
              page={page}
              onChange={handleChange}
              color="primary"
              shape="rounded"
              siblingCount={1}
              boundaryCount={1}
              style={{ marginTop: 30 }}
            />
          </Box>
        </>
      ) : (
        <Box py={3} px={2} alignContent="center">
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
              </div>
            </Box>
          </Box>
        </Box>
      )}

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
