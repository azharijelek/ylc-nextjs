import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
//import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/theme'
import { SWRConfig } from 'swr'
import fetch from '@/lib/fetchJson'

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

  return (
    <>
      <Head>
        <title>Your Life Choices</title>
        <link rel="manifest" href="/manifest.json"></link>
        <link rel="icon" href="/favicon.ico"></link>
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-180x180-dunplab-manifest-18305.png"></link>
        <meta name="theme-color" content="#317EFB" />
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
            <NavBar />
            <Component {...pageProps} />
          </SWRConfig>
        </div>
      </ThemeProvider>

      <style jsx global>{`
        .root {
          flex-grow: 1;
          padding-top: 60px;
        }
        body,
        html {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
