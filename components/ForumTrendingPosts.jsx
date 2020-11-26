import useSWR from 'swr'
import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import Link from 'next/link'

export default function ForumTrendingPosts() {
  const { data, error } = useSWR(`/api/threads`)

  if (error) return <div>failed to load</div>

  if (!data)
    return (
      <>
        {Array.apply(null, { length: 4 }).map((e, i) => (
          <div style={{ width: '100%' }} key={i}>
            <Box display="flex" mb="20px" flexWrap="nowrap">
              <Box width="100%">
                <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={15} width="80%" />
              </Box>
            </Box>
          </div>
        ))}
      </>
    )
  return (
    <>
      {data.length > 0 &&
        data.map((post) => {
          return (
            <div key={post.id} className="threadCard">
              <a href={post.parent.slug} className="parent-badge">
                {post.parent.title}
              </a>

              <h3>{post.title}</h3>

              <p>
                Started by{' '}
                <Link href={'/members/' + post.author.username} passHref>
                  <a>{post.author.nickname}</a>
                </Link>
              </p>

              <Box display="flex" mt={2} flexWrap="nowrap" style={{ fontSize: 14, lineHeight: 1 }}>
                <Box display="flex" alignItems="center" flexWrap="wrap" mr={2}>
                  <ChatBubbleOutlineIcon fontSize="inherit" style={{ marginRight: 5 }} />{' '}
                  <strong>{post.posts_count}</strong>
                </Box>
                <Box display="flex" alignItems="center" flexWrap="wrap">
                  <PeopleOutlineIcon fontSize="small" style={{ marginRight: 5 }} />{' '}
                  <strong>{post.members}</strong>
                </Box>
              </Box>
            </div>
          )
        })}

      <style jsx>{`
        .threadCard {
          background: #fff;
          min-height: 100px;
          border-radius: 18px;
          margin-bottom: 20px;
          padding: 20px;
          border: 1px solid #e5e5e5;

          .parent-badge {
            background: #006cab;
            color: #fff;
            line-height: 1;
            padding: 7px 10px;
            border-radius: 90px;
            display: inline-block;
            margin-bottom: 15px;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 1px;
          }

          h3 {
            margin-top: 0;
            margin-bottom: 10px;
          }

          p {
            margin: 0;
            font-size: 12px;

            a {
              color: red;
              font-weight: bold;
            }
          }

          .thread-meta {
          }
        }
      `}</style>
    </>
  )
}
