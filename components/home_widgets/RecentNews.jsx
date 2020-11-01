import useSWR from 'swr'
import PostGrid from '@/components/postswidget/PostGrid'

// function removeDomain(str) {
//   return str.replace(/^.*\/\/[^\/]+/, '')
// }

export default function RecentNews(props) {
  const params = props

  //const url = process.env.WP_API_URL+`/posts?offset=${offset}&per_page=${per_page}&page=${paged}&show_categories=${show_categories}`
  const queryString = Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')

  const url = process.env.WP_API_URL + `/ylc/v1/posts?${queryString}`
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div className="px-4">failed to load</div>
  if (!data)
    return (
      <>
        {Array.apply(null, { length: 4 }).map((e, i) => (
          <div className="post-grid--item" key={i}>
            <div className="thumb"></div>
            <div className="text" style={{ marginBottom: 10, width: '100%', height: 15 }}></div>
            <div className="text" style={{ marginBottom: 15, width: '90%', height: 15 }}></div>
            <div className="text" style={{ marginBottom: 10, width: '70%', height: 10 }}></div>
            <div className="text" style={{ marginBottom: 0, width: '90%', height: 10 }}></div>
          </div>
        ))}

        <style jsx>{`
          .post-grid--item {
            width: 80%;
            flex: 0 0 auto;
            padding: 0 15px 0 0;
            &:first-of-type {
              padding-left: 15px;
            }
            .thumb {
              height: 140px;
              margin-bottom: 10px;
              background-color: rgba(0, 0, 0, 0.11);
              border-radius: 8px;
            }
            .text {
              height: 10px;
              background-color: rgba(0, 0, 0, 0.11);
              width: 100%;
              line-height: 1;
              border-radius: 4px;
            }
          }
        `}</style>
      </>
    )

  return (
    <>
      {data.length > 0 &&
        data.map((post) => (
          <div className="post-grid--item" key={'slider-' + post.id}>
            <PostGrid
              id={post.id}
              title={post.title}
              thumbnail={post.featured_img + '&h=60'}
              permalink={post.permalink}
              categories={post.categories}
              blurb={post.blurb}
              key={'post-' + post.id}
            />
          </div>
        ))}

      <style jsx>{`
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
