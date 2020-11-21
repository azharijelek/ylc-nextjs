import SvgIcon from '@material-ui/core/SvgIcon'

export default function CommentTemplate(props) {
  const comment = props.comment

  /**
   * Thumbs Up Icon
   */
  const iconStyles = {
    fill: 'none',
    fontSize: 16,
    verticalAlign: 'middle',
    marginRight: 2,
    display: 'inline-block'
  }
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

  const classes = props.isReply ? ' is-reply ' : ''

  return (
    <>
      <div className={'comment-inner' + classes}>
        {/* Avatar */}
        <div className="avatar">
          <img src={comment.user_info.avatar} loading="lazy" alt="" />
        </div>

        {/* Content */}
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
                <ThumbsUpIcon />
                {comment.likes}
              </div>

              {/* Dislike */}
              <div>
                <ThumbsDownIcon />
                {comment.dislikes}
              </div>

              {/* Date */}
              <div className="comment-date">{comment.date}</div>
            </div>

            {/* Replies Slot */}
            {props.repliesAction && props.repliesAction}
          </div>
        </div>
      </div>

      <style jsx>
        {`
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
            &.is-reply {
              .avatar {
                width: 25px;
                min-width: 25px;
                height: 25px;
                min-height: 25px;
                margin-right: 5px;
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
                  word-break: break-word;
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
          }
        `}
      </style>
    </>
  )
}
