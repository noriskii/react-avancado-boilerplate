import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple boilerplate to work with React, Next, StyledComponents and Typescript"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
