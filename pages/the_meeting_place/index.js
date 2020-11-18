import Box from '@material-ui/core/Box'

export default function TheMeetingPlace() {
  return (
    <>
      <main className="ylc-outtest-wrapper">
        <Box py={5} mt={3} justifyContent="center" display="flex" flexWrap="wrap">
          <Box width="100%">
            <div className="text-center">
              <img
                src="/static/img/article.svg"
                alt="no article"
                loading="lazy"
                style={{ maxWidth: '225px' }}
                height="225"
                width="225"
              />
              <div style={{ marginTop: 20 }}>
                <strong>Forum is currently under construction</strong>
              </div>
            </div>
          </Box>
        </Box>
      </main>
    </>
  )
}
