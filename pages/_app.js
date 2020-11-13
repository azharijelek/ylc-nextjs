import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import theme from '../theme'
import fetch from '@/lib/fetchJson'
import useUser from '@/lib/useUser'
import { SWRConfig } from 'swr'
import { useRouter } from 'next/router'
import Head from 'next/head'

// export function reportWebVitals(metric) {
// 	console.log(metric)
// }

/**
 * YLC App
 * @param {Component, pageProps} param0
 */
function ylcApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const router = useRouter()
  const { user } = useUser()

  return (
    <>
      <Head>
        <title>Your Life Choices</title>
      </Head>
      <ThemeProvider theme={theme}>
        <div className="root">
          {/* <CssBaseline /> */}
          <SWRConfig
            value={{
              fetcher: fetch,
              onError: (err) => {
                console.error(err)
              }
            }}>
            <NavBar path={router.pathname} user={user} />
            <Component {...pageProps} />
            <Footer user={user} />
          </SWRConfig>
        </div>
      </ThemeProvider>

      <style jsx global>{`
        .root {
          flex-grow: 1;
          padding-top: 60px;
          min-height: 70vh;
        }
        body,
        html {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        .container {
          padding: 15px;
        }

        a {
          color: inherit;
          text-decoration: none !important;
        }

        * {
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        .my-0 {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }

        .ylc-widgethead {
          font-size: 20px;
          border-left: 5px solid #ed1b33;
          font-weight: 700;
          letter-spacing: 0.03em;
          padding-left: 10px;
          display: -moz-box;
          display: flex;
          -moz-box-align: center;
          align-items: center;
          margin-bottom: 15px !important;
          margin-top: 0;
        }

        .text-center {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default ylcApp
