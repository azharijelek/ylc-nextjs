import PropTypes from 'prop-types'

export default function HorizontalScroll(props) {
  return (
    <>
      <div className="hs">{props.children}</div>

      <style jsx>{`
        .hs {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          &::-webkit-scrollbar {
            display: none;
          }
          &:before,
          &:after {
            content: '';
          }
        }
      `}</style>
    </>
  )
}

HorizontalScroll.propTypes = {
  children: PropTypes.any
}
