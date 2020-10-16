import Link from 'next/link'
import PropTypes from 'prop-types'

/**
 * PostList
 * @param {*} props id, title, thumbnail, permalink
 */
export default function PostList(props) {
  let thumbnail = `${props.thumbnail}&h=60`
  return (
    <>
      <article id={'post-' + props.id} className={'post post-' + props.id}>
        <div className="postThumb">
          <div className="media">
            <Link href={props.permalink}>
              <a>
                <img src={thumbnail} alt={props.title} width="60" height="60" loading="lazy" />
              </a>
            </Link>
          </div>
        </div>
        <div className="postDetail">
          <h4>
            <Link href={props.permalink}>
              <a>{props.title}</a>
            </Link>
          </h4>
        </div>
      </article>

      <style jsx>{`
        .post {
          display: flex;
          margin-bottom: 20px;
        }
        .postThumb {
          min-width: 25%;
          max-width: 25%;
          margin-right: 15px;
        }
        .postDetail {
          h4 {
            margin: 0;
            font-size: 16px;
            line-height: 20px;
          }
        }
        .media {
          width: 100%;
          height: 60px;
          overflow: hidden;
          border-radius: 4px;
          background: #e0e0e0;
          img {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

PostList.propTypes = {
  id: PropTypes.any,
  permalink: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string
}
