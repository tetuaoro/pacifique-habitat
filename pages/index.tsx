import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { Organization, WithContext } from "schema-dts"

const sitename = "Pacifique Habitat"

const organization: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://pacifiquehabitat.pf",
  logo: "https://pacifiquehabitat.pf/assets/logo-112.png",
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{sitename}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">{JSON.stringify(organization)}</script>
      </Head>

      <main className={styles.main}>
        <h1>{sitename}</h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
