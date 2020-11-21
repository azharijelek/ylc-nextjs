import Link from 'next/link'

export default function HeroCard(props) {
  return (
    <>
      <section className="hs-card">
        <h2>
          <Link href={props.permalink}>
            <a title={props.title}>{props.title}</a>
          </Link>
        </h2>
        <Link href={props.permalink}>
          <a title={props.title}>
            <img
              src={props.thumbnail + '?h=200&q=40'}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/static/img/photo.svg'
              }}
              width="300"
              height="200"
              alt={props.title}
              loading="lazy"
            />
          </a>
        </Link>
      </section>

      <style jsx>{`
        .hs-card {
          width: 300px;
          height: 200px;
          background: #ddd;
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          background: #f5f5f5;

          h2 {
            display: block;
            width: 100%;
            height: auto;
            background: rgba(0, 0, 0, 0.7);
            padding: 13px;
            font-size: 16px;
            line-height: 25px;
            font-weight: bold;
            position: absolute;
            bottom: 0;
            left: 0;
            color: #fff;
            margin: 0;
            text-align: left;
            min-height: 70px;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      `}</style>
    </>
  )
}
