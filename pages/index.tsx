import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Organization, { description, sitename, siteurl } from "@utils/schema"
import commonStyle from "@styles/Common.module.css"

import * as React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

const Home: NextPage = () => {
  return (
    <main className="container">
      <Head>
        <title>{sitename}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={siteurl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={sitename} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteurl}/assets/images/index.png`} />
        <meta property="og:image:width" content="940" />
        <meta property="og:image:height" content="440" />
        <script type="application/ld+json">{JSON.stringify(Organization)}</script>
      </Head>

      <section className={commonStyle.marginTop}>
        <center>
          <h1>{sitename.toUpperCase()}</h1>
          <Image alt="Couverture de la page principale" priority src="/assets/images/index.png" width={940} height={440} layout="responsive" />
          <article>
            <p>
              {description +
                " Si vous cherchez un prestataire de service fiable et efficace, PACIFIQUE HABITAT répond a vos besoins. Qu'il s'agisse de petits travaux ou d'un projet de grande ampleur, nous sommes là pour vous proposer nos services spécialisés."}
            </p>
          </article>
        </center>
      </section>
    </main>
  )
}

export default Home
