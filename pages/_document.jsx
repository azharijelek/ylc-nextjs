import { Fragment } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'

class YourLifeChoices extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <meta name="theme-color" content="#ED1B33" />
            <style jsx global>
              {`
                html,
                body {
                  height: 100%;
                  width: 100%;
                  margin: 0;
                  padding: 0;
                }
                body {
                  overflow-x: hidden;
                  overflow-y: auto;
                  max-width: 100%;
                  width: 100%;
                }
                *,
                *:after,
                *:before {
                  box-sizing: border-box;
                }
                body {
                  font-size: 1rem;
                  margin: 0;
                }
                a {
                  color: inherit;
                  text-decoration: none !important;
                }
                .container {
                  padding: 25px 15px;
                  overflow-x: hidden;
                  overflow-y: auto;
                  max-width: 100%;
                  width: 100%;
                }
                .my-0 {
                  margin-top: 0 !important;
                  margin-bottom: 0 !important;
                }
                img {
                  max-width: 100%;
                }
              `}
            </style>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    )
  }
}

YourLifeChoices.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </Fragment>
    ]
  }
}

export default YourLifeChoices
