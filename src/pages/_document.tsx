import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps, } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, }
  }

  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
