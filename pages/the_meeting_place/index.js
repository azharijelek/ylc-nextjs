import Box from '@material-ui/core/Box'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import HorizontalScroll from '@/components/HorizontalScroll'

export default function TheMeetingPlace() {
  const [fullIntro, setFullIntro] = useState(false)
  const [forumTypes, setForumTypes] = useState([])

  useEffect(() => {
    fetchForumFetch()
  }, [])

  const fetchForumFetch = async () => {
    const url = `/api/forums`
    try {
      const data = await fetch(url).then(function (response) {
        return response.json()
      })
      setForumTypes(data)
    } catch (error) {
      return error
    }
  }

  const handleReadMore = () => {
    setFullIntro(true)
  }

  return (
    <>
      <Head>
        <title>The Meeting Place - Seniors Forum</title>
      </Head>
      <main className="ylc-outtest-wrapper">
        <div className="forum-nav">
          <HorizontalScroll>
            <button>Trending</button>
            <button>Newest</button>
            <button>Most Alive</button>
            <button>Forum List</button>
          </HorizontalScroll>
        </div>
        <Box px={3} pb={4} mt={2} style={{ minHeight: '100vh' }}>
          <h1 style={{ textAlign: 'center' }}>The Meeting Place {fullIntro}</h1>
          <Box my={2} justifyContent="center" display="flex" flexWrap="wrap">
            <img src="/static/img/forum-home.svg" alt="the meeting place" />
          </Box>

          {fullIntro != true && (
            <>
              <p style={{ marginBottom: 10 }}>
                The Meeting Place is a free online forum that provides a safe, secure environment
                where you can exchange ideas and information.
              </p>
              <button onClick={handleReadMore} className="readmore">
                Read More &raquo;
              </button>
            </>
          )}

          {fullIntro == true && (
            <>
              <p>
                The Meeting Place is a free online forum that provides a safe, secure environment
                where you can exchange ideas and information. In order to ensure everyone has fun on
                the Meeting Place, we have created these easy-to-follow guidelines. Of course we
                encourage the sharing of opinions, but it’s important to remember that no one
                opinion is right, therefore, no one has the right to put anyone else’s opinion down.
                If you don’t agree with someone’s point of view, please respond with an intelligent
                rebuttal. It’s okay to say someone’s point is silly, but it’s not okay to say that
                the poster is stupid.
              </p>
              <p>
                So, please, follow our community guidelines, have a laugh, and enjoy your time on
                the Meeting Place forum.
              </p>
            </>
          )}

          <pre style={{ wordBreak: 'break-all', maxWidth: '100%', overflow: 'hidden' }}>
            {JSON.stringify(forumTypes, null, 2)}
          </pre>
        </Box>
      </main>
      <style jsx>{`
        .ylc-outtest-wrapper {
          min-height: 100vh;
        }
        button.readmore {
          background: transparent;
          padding: 0;
          margin: 0;
          display: inline;
          border: 0;
          font-size: inherit;
          cursor: pointer;
          color: red;
        }

        .forum-nav {
          position: sticky;
          top: 57px;
          left: 0;
          right: 0;
          z-index: 1;
          width: 100%;
          background: #ed1b33;
          color: #fff;

          button {
            width: calc(100% / 4);
            background: transparent;
            border: 0;
            display: block;
            line-height: 20px;
            padding: 10px 5px;
            color: inherit;
            outline: none;
            box-shadow: none;
            font-size: 14px;
            letter-spacing: 0.5px;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            &:hover {
              background: rgba(0, 0, 0, 0.1);
            }
          }
        }
      `}</style>
    </>
  )
}
