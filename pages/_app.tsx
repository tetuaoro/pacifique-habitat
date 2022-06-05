import type { AppProps } from "next/app"
import Head from "next/head"
import Header from "@components/header"
import Footer from "@components/footer"
import Organization from "@utils/schema"

import "@styles/pico.custom.css"
import "@styles/header.css"


function App({ Component, pageProps }: AppProps) {
  const Main = Component
  return (
    <div id="_layout">
      <Head>
        <script type="application/ld+json">{JSON.stringify(Organization)}</script>
      </Head>
      <Header />
      <Main {...pageProps} />
      <Footer />
    </div>
  )
}

export default App
