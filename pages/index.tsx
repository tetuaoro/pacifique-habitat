import type { NextPage } from "next"
import Head from "next/head"
import { description, sitename } from "@utils/schema"
import Image from "next/image"

import * as React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

const Home: NextPage = () => {
  const margin: React.CSSProperties = {
    marginTop: "var(--block-spacing-vertical)",
  }
  return (
    <main className="container">
      <Head>
        <title>{sitename}</title>
        <meta name="description" content={description} />
      </Head>

      <section style={margin} className="container-fluid">
        <center>
          <h1>{sitename.toUpperCase()}</h1>
        </center>
        <Image alt="Couverture de la page principale" priority src="/assets/images/index.png" width={940} height={440} layout="responsive" sizes="100vw" />
        <center>
          <p style={margin}>
            {description +
              " Si vous cherchez un prestataire de service fiable et efficace, PACIFIQUE HABITAT répond a vos besoins. Qu'il s'agisse de petits travaux ou d'un projet de grande ampleur, nous sommes là pour vous proposer nos services spécialisés."}
          </p>
        </center>
      </section>
    </main>
  )
}

export default Home
