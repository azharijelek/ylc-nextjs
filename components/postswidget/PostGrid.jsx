
import Link from 'next/link'

/**
 * PostGrid
 * @param {*} props id, title, thumbnail, permalink
 */
export default function PostGrid(props) {
    let thumbnail = `${process.env.IMG_OPT_URL}/283x140,crop,quality=medium/${props.thumbnail}`
    return (
        <>
            <article className={'post-grid post-'+props.id}>
                <div className="post-grid--thumb">
                    <Link href={props.permalink}><a><img src={thumbnail} alt={props.title} width="60" height="60" loading="lazy"/></a></Link>
                </div>
                <div className="postDetail">
                    <h4><Link href={props.permalink}><a>{props.title}</a></Link></h4>
                </div>
            </article>

            <style jsx>{`
                // div .post-grid:first-of-type {
                //     padding-left: 15px;
                // }
                .post-grid {
                    .post-grid--thumb {
                        width: 100%;
                        height: 140px;
                        overflow: hidden;
                        margin-bottom: 10px;
                        overflow: hidden;
                        background: #e0e0e0;
                        border-radius: 8px;
                        line-height: 0;
                        img {
                            object-fit: cover!important;
                            width: 100%!important;
                            height: 100%!important;
                        }
                    }
                    h4 {
                        font-size: 18px;
                        margin-top: 10px;
                    }
                }
            `}</style>
        </>
    )
}