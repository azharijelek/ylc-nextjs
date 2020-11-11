import { useState, useEffect } from 'react'
import CommentTemplate from '@/components/article/CommentTemplate'

export default function Comments(props) {
  const post_id = props.postId
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState({})
  const [totalItems, setTotalItems] = useState(0)
  const [paged, setPaged] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [moreLoading, setMoreLoading] = useState(false)
  const [error, setError] = useState(null)

  // Lifecycle
  useEffect(() => {
    setLoading(true)
    fetchMoreComments(paged, false)
  }, [])

  /**
   * Handle More Comments
   */
  const fetchMoreComments = async (paged, ismore = false, parent) => {
    const next_page = ismore == true ? parseInt(paged + 1) : paged
    const comment_parent = typeof parent != 'undefined' ? `&parent=${parent}` : ''
    try {
      const data = await fetch(
        `/api/comments?post_id=${post_id}&paged=${next_page}${comment_parent}`
      ).then(function (response) {
        return response.json()
      })

      // Get items
      const comments_loaded = await data.items
      const pagination = data.pagination

      if (typeof parent == 'undefined') {
        const items = { ...comments }
        const newItems = { ...items, ...comments_loaded }
        setComments(newItems)
        setPageInfo(pagination)
      } else {
        setReplies(parent, comments_loaded)
      }

      if (ismore) {
        setMoreLoading(false)
        // Smooth Scroll
        setTimeout(() => {
          const newId = 'comment-' + data.first_id
          scrollToNewItems(newId)
        }, 50)
      } else {
        setLoading(false)
      }
    } catch (error) {
      console.log('An unexpected error happened:', error)
      setError(true)
      setLoading(false)
    }
  }

  /**
   * Set Replies Data
   * @param {Number} parent
   * @param {Array} comments_loaded
   */
  const setReplies = (parent, comments_loaded) => {
    const parentobj = comments[parent]
    parentobj.children = comments_loaded

    const prev_comments = { ...comments }
    prev_comments[parent] = parentobj

    setComments({ ...comments, ...prev_comments })
  }

  /**
   * Set page info
   * @param {*} pagination
   */
  const setPageInfo = (pagination) => {
    setPaged(pagination.current_page)
    setTotalPages(pagination.total_pages)
    setTotalItems(pagination.total_items)
  }

  /**
   * Scroll to ID
   */
  const scrollToNewItems = (id) => {
    const el = document.getElementById(id)
    const position = parseInt(el.offsetTop - 67)

    window.scrollTo({
      top: position
    })
  }

  // Loading
  if (loading && error != true)
    return (
      <>
        <div>Loading</div>
      </>
    )

  // ERROR
  if (error && !loading) return <div className="px-4">failed to load</div>

  if (!loading && !error)
    return (
      <>
        {/* <pre>{JSON.stringify(comments, null, 2)}</pre> */}

        {totalItems > 0 && (
          <ol id="comments" className="comment-list">
            {Object.entries(comments).map(([id]) => (
              <li id={'comment-' + id} key={'comment-' + id} className="comment">
                <CommentTemplate
                  comment={comments[id]}
                  repliesAction={
                    comments[id]['replies'] > 0 &&
                    typeof comments[id]['children'] == 'undefined' && (
                      <button
                        onClick={() => {
                          fetchMoreComments(1, false, id)
                        }}
                        className="view-replies">
                        {' '}
                        {comments[id]['replies'] + ' replies'}
                      </button>
                    )
                  }
                />

                {/* Replies */}
                {comments[id]['children'] != null && (
                  <ol className="children">
                    {Object.entries(comments[id]['children']).map(([child_id]) => (
                      <li
                        id={'comment-' + child_id}
                        key={'comment-' + child_id}
                        className="comment">
                        <CommentTemplate comment={comments[id]['children'][child_id]} isReply />
                      </li>
                    ))}
                  </ol>
                )}
                {/* // End children */}
              </li>
            ))}
          </ol>
        )}

        {/* Load more comments trigger button */}
        {totalPages > paged && (
          <button
            className="comment-more"
            onClick={() => {
              setMoreLoading(true)
              fetchMoreComments(paged, true)
            }}>
            {moreLoading == true ? 'Loading...' : 'Load More Comments'}
          </button>
        )}

        {/* Styling */}
        <style jsx>{`
          ol {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .comment {
            display: block;
            margin: 10px 0;
          }
          .view-replies {
            color: #65676b;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            padding-left: 17px;
            position: relative;
            margin-top: 5px;
            background: transparent;
            border: 0;
            &:before {
              content: '';
              width: 8px;
              height: 8px;
              display: block;
              border-left: 2px solid #65676b;
              border-bottom: 2px solid #65676b;
              position: absolute;
              left: 0;
              top: 0;
              border-radius: 0 0 0 4px;
            }
            &:hover {
              text-decoration: underline;
            }
          }
          .comment-more {
            display: block;
            background: #ed1b33;
            color: #fff;
            border: 0;
            width: 100%;
            max-width: 200px;
            text-align: center;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
            margin: 20px auto 0;
            cursor: pointer;
          }
          .children {
            margin-left: 20px;
            padding-left: 10px;
          }
        `}</style>
      </>
    )
}
