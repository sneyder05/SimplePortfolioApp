import '../styles/antd.less'
import '../styles/app.scss'

import React from 'react'
import Head from 'next/head'
import type { AppProps, } from 'next/app'

const MyApp = ({ Component, pageProps, }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Simple Portfolio App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp