import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import theme from '../theme'
import fetch from '@/lib/fetchJson'
import { SWRConfig } from 'swr'
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

  return (
    <>
      <Head>
        <title>Your Life Choices</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180x180-dunplab-manifest-18305.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <div className="root">
          <SWRConfig
            value={{
              revalidateOnFocus: false,
              refreshInterval: 0,
              fetcher: fetch,
              onError: (err) => {
                console.error(err)
              }
            }}>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
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
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        p {
          font-size: 18px;
          line-height: 28px;
          margin: 28px 0;
          color: #333;

          & + br {
            display: none !important;
          }
        }

        table {
          max-width: 100%;
          td {
            padding: 10px;
          }
        }

        article {
          img {
            max-width: 100%;
            height: auto !important;
          }
        }

        .container {
          padding: 20px;
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
          margin-bottom: 20px !important;
          margin-top: 0;
        }

        .text-center {
          text-align: center;
        }

        .ylc-outtest-wrapper {
          min-height: 70vh;
        }
      `}</style>
    </>
  )
}

export default ylcApp
