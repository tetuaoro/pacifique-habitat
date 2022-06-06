import type { NextPage } from "next"
import Head from "next/head"
import { sitename } from "@utils/schema"

const Home: NextPage = () => {
  return (
    <main className="container">
      <Head>
        <title>{sitename}</title>
        <meta
          name="description"
          content="Pacifique Habitat est une entreprise générale de construction et de rénovation de l'habitat, en allant du gros œuvre aux finitions en passant par le second œuvre."
        />
      </Head>

      <section>
        <h1>{sitename}</h1>
      </section>
    </main>
  )
}

export default Home
