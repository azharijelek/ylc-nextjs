import { Fragment } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'

class YourLifeChoices extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" />
            <link
              rel="apple-touch-icon"
              href="/icons/apple-icon-180x180-dunplab-manifest-18305.png"
            />
            <meta name="theme-color" content="#317EFB" />
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
    styles: [
      <Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </Fragment>
    ]
  }
}

export default YourLifeChoices
