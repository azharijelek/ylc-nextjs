import Box from '@material-ui/core/Box'
import { useState, useEffect } from 'react'

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
      <main className="ylc-outtest-wrapper">
        <Box px={3} pb={4} mt={2}>
          <h1 style={{ textAlign: 'center' }}>The Meeting Place {fullIntro}</h1>
          <Box my={2} justifyContent="center" display="flex" flexWrap="wrap">
            <img src="/static/img/forum-home.svg" alt="the meeting place" />
          </Box>

          <pre style={{ wordBreak: 'break-all', maxWidth: '100%', overflow: 'hidden' }}>
            {JSON.stringify(forumTypes, null, 2)}
          </pre>

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

          <style jsx>{`
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
          `}</style>
        </Box>
      </main>
    </>
  )
}
