import { useState, useEffect } from 'react'
import axios from 'axios'
import SvgIcon from '@material-ui/core/SvgIcon'

export default function Comments(props) {
  const post_id = props.postId
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [paged, setPaged] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [moreLoading, setMoreLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [more, setMore] = useState([])

  // Lifecycle
  useEffect(() => {
    setLoading(true)
    fetchMoreComments(paged, false)
  }, [])

  /**
   * Handle More Comments
   */
  const fetchMoreComments = async (paged, ismore = false) => {
    const next_page = ismore == true ? parseInt(paged + 1) : paged
    try {
      const { data } = await axios
        .get(`${process.env.WP_API_URL}/ylc/v1/comments?post_id=${post_id}&paged=${next_page}`)
        .then(function (response) {
          if (!ismore) {
            setLoading(false)
          } else {
            setMoreLoading(false)
          }
          return response
        })

      // Get items
      const comments_loaded = data.items

      // Setup array push
      if (ismore) {
        let items = [...comments]
        if (comments_loaded.length > 0) {
          comments_loaded.forEach((el) => {
            items.push(el)
          })
          setComments(items)

          // Scroll to first item of new loaded comments
          setTimeout(() => {
            const newId = 'comment-' + comments_loaded[0].id.toString()
            scrollToNewItems(newId)
          }, 50)
        }
      } else {
        if (comments.length == 0) {
          setComments(comments_loaded)
        }
      }

      const current_page = data.pagination.current_page
      const total_pages = data.pagination.total_pages
      const total_items = data.pagination.total_items

      setPaged(current_page)
      setTotalPages(total_pages)
      setTotalItems(total_items)
    } catch (error) {
      console.log('An unexpected error happened:', error)
      setError(true)
      setLoading(false)
    }
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

  /**
   * Thumbs Up Icon
   */
  const iconStyles = { fill: 'none', fontSize: 16, verticalAlign: 'middle', marginRight: 2 }
  const ThumbsUpIcon = () => {
    return (
      <SvgIcon style={iconStyles}>
        <path
          d="M5.83333 18.3333H3.33333C2.89131 18.3333 2.46738 18.1577 2.15482 17.8452C1.84226 17.5326 1.66667 17.1087 1.66667 16.6667V10.8333C1.66667 10.3913 1.84226 9.96737 2.15482 9.65481C2.46738 9.34225 2.89131 9.16666 3.33333 9.16666H5.83333M11.6667 7.49999V4.16666C11.6667 3.50362 11.4033 2.86773 10.9344 2.39889C10.4656 1.93005 9.82971 1.66666 9.16667 1.66666L5.83333 9.16666V18.3333H15.2333C15.6353 18.3379 16.0253 18.197 16.3316 17.9367C16.6379 17.6763 16.8397 17.3141 16.9 16.9167L18.05 9.41666C18.0863 9.17779 18.0701 8.93389 18.0028 8.70187C17.9354 8.46984 17.8184 8.25524 17.6599 8.07292C17.5013 7.8906 17.3051 7.74493 17.0846 7.64601C16.8642 7.54708 16.6249 7.49725 16.3833 7.49999H11.6667Z"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    )
  }

  /**
   * Thumbs DOWN Icon
   */
  const ThumbsDownIcon = () => {
    return (
      <SvgIcon style={iconStyles}>
        <path
          d="M14.1667 1.66665H16.3917C16.8633 1.65831 17.3216 1.82343 17.6795 2.13067C18.0374 2.4379 18.2701 2.86587 18.3333 3.33332V9.16665C18.2701 9.6341 18.0374 10.0621 17.6795 10.3693C17.3216 10.6765 16.8633 10.8417 16.3917 10.8333H14.1667M8.33333 12.5V15.8333C8.33333 16.4964 8.59672 17.1322 9.06556 17.6011C9.5344 18.0699 10.1703 18.3333 10.8333 18.3333L14.1667 10.8333V1.66665H4.76666C4.36472 1.66211 3.97468 1.80298 3.66841 2.06331C3.36213 2.32365 3.16026 2.6859 3.09999 3.08332L1.94999 10.5833C1.91374 10.8222 1.92985 11.0661 1.99721 11.2981C2.06457 11.5301 2.18158 11.7447 2.34011 11.9271C2.49865 12.1094 2.69493 12.255 2.91535 12.354C3.13577 12.4529 3.37507 12.5027 3.61666 12.5H8.33333Z"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    )
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
            {comments.map((comment) => (
              <li
                id={'comment-' + comment.id}
                name={'comment_' + comment.id}
                key={'comment-' + comment.id}
                className="comment">
                <div className="comment-inner">
                  <div className="avatar">
                    <img src={comment.user_info.avatar} loading="lazy" alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="comment-text-wrapper">
                      <div className="comment-user">{comment.user_info.name}</div>
                      <div
                        dangerouslySetInnerHTML={{ __html: comment.content }}
                        className="comment-text"></div>
                    </div>

                    {/* Actions */}
                    <div className="comment-actions">
                      <div className="like-dislike-date">
                        {/* Like */}
                        <div>
                          <a href="#like">
                            <ThumbsUpIcon />
                            {comment.likes}
                          </a>
                        </div>

                        {/* Dislike */}
                        <div>
                          <a href="#like">
                            <ThumbsDownIcon />
                            {comment.dislikes}
                          </a>
                        </div>

                        {/* Date */}
                        <div className="comment-date">{comment.date}</div>
                      </div>

                      {comment.replies > 0 && (
                        <div className="view-replies"> {comment.replies + ' replies'}</div>
                      )}
                    </div>
                  </div>
                </div>
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
                  color: #5a5a5a;
                }
              }
            }
            .comment-actions {
              padding: 0 18px;
            }
            .like-dislike-date {
              display: flex;
              align-items: center;
              font-size: 12px;
              line-height: 1;
              margin: 7px 0 12px;

              div {
                a {
                  display: inline-block;
                }
                &:after {
                  content: '';
                  display: inline-block;
                  width: 3px;
                  height: 3px;
                  border-radius: 90px;
                  background: #000;
                  opacity: 0.3;
                  margin: 0 7px;
                  position: relative;
                  top: -2px;
                }
                &:last-child:after {
                  content: none;
                  display: none;
                }
                svg {
                  font-size: 14px;
                  display: inline-block;
                }
              }
            }
            .comment-date {
              color: #717171;
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
            cursor: pointer;
          }
        `}</style>
      </>
    )
}
