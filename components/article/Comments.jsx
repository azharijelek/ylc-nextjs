import React, { useState } from 'react'
import useSWR from 'swr'

/**
 * render html markup
 * @param {*} $html
 */
function createMarkup($html) {
  return { __html: $html }
}

export default function Comments(props) {
  const post_id = props.postId
  const [more, setMore] = useState([])
  const [paged, setpaged] = useState(1)

  /**
   * Handle More Comments
   */
  const fetchMoreComments = async (paged) => {
    const page_to_load = parseInt(paged + 1)
    try {
      const response = await fetch(
        `http://localhost:8080/wp-json/ylc/v1/comments?post_id=${post_id}&paged=${page_to_load}`
      )
      const data = await response.json()

      // get items
      let comments_loaded = data.items

      // Setup array push
      let items = [...more]
      if (comments_loaded.length > 0) {
        comments_loaded.forEach((el) => {
          items.push(el)
        })
        setMore(items)
      }

      const current_page = data.pagination.current_page
      setpaged(current_page)
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  }

  const { data, error } = useSWR(
    `http://localhost:8080/wp-json/ylc/v1/comments?post_id=${post_id}&paged=1`
  )

  if (error) return <div className="px-4">failed to load</div>
  if (!data)
    return (
      <>
        <div>Loading</div>
      </>
    )

  return (
    <>
      {/* <pre>{JSON.stringify(data.items[0], null, 2)}</pre> */}

      {data.pagination.total_items > 0 && (
        <div id="comments">
          {data.items.map((comment) => (
            <div key={'comment-' + comment.id} className="comment">
              <div className="comment-inner">
                <div className="avatar">
                  <img src={comment.user_info.avatar} loading="lazy" alt="" />
                </div>
                <div className="comment-content">
                  <div className="comment-text-wrapper">
                    <div className="comment-user">{comment.user_info.name}</div>
                    <div
                      dangerouslySetInnerHTML={createMarkup(comment.content)}
                      className="comment-text"></div>
                  </div>

                  <div className="comment-actions">
                    {comment.replies > 0 && (
                      <div className="view-replies"> {comment.replies + ' replies'}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* {more.map((comment) => (
        <div key={comment}>{comment.user_info.name}</div>
      ))} */}
      {data.pagination.total_items > 0 && (
        <div id="comments">
          {more.map((comment) => (
            <div key={'comment-' + comment.id} className="comment">
              <div className="comment-inner">
                <div className="avatar">
                  <img src={comment.user_info.avatar} loading="lazy" alt="" />
                </div>
                <div className="comment-content">
                  <div className="comment-text-wrapper">
                    <div className="comment-user">{comment.user_info.name}</div>
                    <div
                      dangerouslySetInnerHTML={createMarkup(comment.content)}
                      className="comment-text"></div>
                  </div>

                  <div className="comment-actions">
                    {comment.replies > 0 && (
                      <div className="view-replies"> {comment.replies + ' replies'}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.pagination.total_items > 10 && (
        <button
          className="comment-more"
          onClick={() => {
            fetchMoreComments(paged)
          }}>
          Load More Comments
        </button>
      )}

      <style jsx>{`
        .comment {
          display: block;
          margin: 10px 0;
        }
        .comment-inner {
          display: flex;
          .avatar {
            margin-right: 10px;
            border-radius: 90px;
            overflow: hidden;
            background: #f5f5f5;
            width: 30px;
            min-width: 30px;
            height: 30px;
            min-height: 30px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .comment-content {
            font-size: 14px;
            margin-right: 0;
            width: 100%;
            width: -webkit-fill-available;
            .comment-text-wrapper {
              background: #f0f2f5;
              padding: 12px 15px;
              border-radius: 18px;
              .comment-user {
                font-weight: bold;
              }
              .comment-text {
                margin-top: 10px;
                font-size: 14px;
                line-height: 20px;
              }
            }
          }
          .view-replies {
            color: #65676b;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            padding-left: 17px;
            position: relative;
            margin-top: 5px;
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
        }
      `}</style>
    </>
  )
}
