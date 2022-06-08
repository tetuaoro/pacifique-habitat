import type { AppProps } from "next/app"
import Header from "@components/header"
import Footer from "@components/footer"

import "@styles/pico.custom.css"
import "@styles/header.css"
import "@styles/footer.css"

function App({ Component, pageProps }: AppProps) {
  const Main = Component
  return (
    <div id="_layout">
      <Header />
      <Main {...pageProps} />
      <Footer />
    </div>
  )
}

export default App
