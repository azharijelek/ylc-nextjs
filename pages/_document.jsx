import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'

class YourLifeChoices extends Document {
  render() {
    return (
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
              .my-0 {
                margin-top: 0 !important;
                margin-bottom: 0 !important;
              }
              img {
                max-width: 100%;
              }
              .content {
                max-width: 100%;
                overflow: hidden;
                img {
                  max-width: 100%;
                  width: auto;
                }
                p {
                  font-size: 16px;
                  line-height: 25px;

                  & + br {
                    display: none !important;
                  }
                }
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
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
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  }
}

export default YourLifeChoices
