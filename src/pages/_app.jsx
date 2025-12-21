import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tasky</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
